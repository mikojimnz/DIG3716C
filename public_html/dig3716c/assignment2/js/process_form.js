/* eslint-env browser */

// Wait for page to finish loading
window.onload = function () {
    "use strict"
    
    // Common form elements
    var fName = document.survey.fName;
    var lName = document.survey.lName;
    var email = document.survey.email;
    var tel = document.survey.tel;
    var url = document.survey.url;
    var box = document.survey.anom;

    // Check if "anonymous" box is checked.
    function disableFields() {
        if (box.checked) {
            // Disable inputs
            fName.disabled = true;
            lName.disabled = true;
            
            // Clear inputs
            fName.value = "";
            lName.value = "";
            
            // Clear existings validation stats
            fName.removeAttribute("class");
            lName.removeAttribute("class");
        } else {
            // Enable inputs
            fName.disabled = false;
            lName.disabled = false;
        }
    }

    // Check form inputs
    function validateData() {
        // Form is valid untill any condition is not met;
        var valid = true;
        
        // Preform name checks if anonymous is not enabled
        if (!box.checked) {
            
            // First name check
            if (fName.value.length == 0) { // Check if input is blank but do not show error
                valid = false;
            } else if (/^[A-Za-z]{1,}$/.test(fName.value)) { // Check if input matches RegEx pattern
                document.getElementById("label_fName").setAttribute("class", "check");
            } else { // If neither show error
                document.getElementById("label_fName").setAttribute("class", "error_name");
                valid = false;
            }
            
            // Last name check check
            if (lName.value.length == 0) {
                valid = false;
            } else if (/^[A-Za-z]{1,}$/.test(lName.value)) {
                document.getElementById("label_lName").setAttribute("class", "check");
            } else {
                document.getElementById("label_lName").setAttribute("class", "error_name");
                valid = false;
            }
        }
        
        // Email check
        if (email.value.length == 0) {
            valid = false;
        } else if (/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email.value)) { // NOT RFC5322 Compliant
            document.getElementById("label_email").setAttribute("class", "check");
        } else {
            document.getElementById("label_email").setAttribute("class", "error_email");
            valid = false;
        }

        // Phone Number check
        if (tel.value.length == 0) {
            valid = false;
        } else if (/^\d{3}-\d{3}-\d{4}$/.test(tel.value)) {
            document.getElementById("label_tel").setAttribute("class", "check");
        } else {
            document.getElementById("label_tel").setAttribute("class", "error_tel");
            valid = false;
        }
        
        // URL check
        if (url.value.length == 0) {
            valid = false;
        } else if (/^http(s)?:\/\/([\w\d]{1,}.)+[A-Za-z]{2,}\/~[\w\d\c/.?&]+$/.test(url.value)) {
            document.getElementById("label_url").setAttribute("class", "check");
        } else {
            document.getElementById("label_url").setAttribute("class", "error_url");
            valid = false;
        }
        
        // Return form validity for formSubmit()
        return valid;

    }

    // Process form answers
    function formSubmit() {
        var q1 = document.querySelector('input[name="q1"]:checked');
        var q2 = document.querySelector('input[name="q2"]:checked');
        var q3 = document.querySelector('input[name="q3"]:checked');
        var result = document.getElementById("result");
        var badge = document.getElementById("badge");
        var badgeUrl = document.getElementById("badge_url");
        var userInfo = document.getElementById("ans-disp-info");
        var userAns = document.getElementById("ans-disp-q");
        var loc = window.location.href;
        var score = 0;
        
        // Check if user info is valid, if not show error.
        if (!validateData()) {
            document.getElementById("ans-info").removeAttribute("class");
            return;
        } else {
            document.getElementById("ans-info").setAttribute("class", "hide");
        }
        
        // Check if any of the survey questions are empty, if so show error
        if (q1 == null || q2 == null || q3 == null) {
            document.getElementById("ans-all").removeAttribute("class");
            return;
        } else {
            document.getElementById("ans-all").setAttribute("class", "hide");
        }
        
        // Tally survey score
        score += parseInt(q1.value) + parseInt(q2.value) + parseInt(q3.value);
        
        // Update result and badge based on score
        if (score < 2) {
            result.textContent = "Novice";
            badge.setAttribute("src", "./img/0.png");
            badgeUrl.setAttribute("href", loc.replace("survey.html", "img/0.png"))
            badgeUrl.textContent = loc.replace("survey.html", "img/0.png");
        } else if (score <= 2 && score < 5) {
            result.textContent = "Intermediate";
            badge.setAttribute("src", "./img/1.png");
            badgeUrl.setAttribute("href", loc.replace("survey.html", "img/1.png"))
            badgeUrl.textContent = loc.replace("survey.html", "img/1.png");
        } else if (score <= 6 && score < 7) {
            result.textContent = "Advanced";
            badge.setAttribute("src", "./img/2.png");
            badgeUrl.setAttribute("href", loc.replace("survey.html", "img/2.png"))
            badgeUrl.textContent = loc.replace("survey.html", "img/2.png");
        } else {
            result.textContent = "Expert";
            badge.setAttribute("src", "./img/3.png");
            badgeUrl.setAttribute("href", loc.replace("survey.html", "img/3.png"))
            badgeUrl.textContent = loc.replace("survey.html", "img/3.png");
        }
        
        // Fill user information
        userInfo.children[0].textContent = "Name: " + (box.checked ? "Anonymous" : fName.value + " " + lName.value);
        userInfo.children[1].textContent = "Emai: " + email.value;
        userInfo.children[2].textContent = "Phone: " + tel.value;
        userInfo.children[3].textContent = "URL: " + url.value;
        
        // Fill user answers
        userAns.children[0].textContent = q1.parentElement.textContent;
        userAns.children[1].textContent = q2.parentElement.textContent;
        userAns.children[2].textContent = q3.parentElement.textContent;
        
        // Hide form, show results
        document.getElementById("form-container").setAttribute("class", "hide");
        document.getElementById("result-container").removeAttribute("class");
    }
    
    // ############################
    // # Register event listeners #
    // ############################
    
    // Validate form on every keystroke
    document.body.addEventListener("keyup", validateData, false);
    
    // Listen for anonymous box state change
    box.addEventListener("change", disableFields, false);
    
    // Listen for form submit click
    document.getElementById("frm_submit").addEventListener("click", formSubmit, false);
}
