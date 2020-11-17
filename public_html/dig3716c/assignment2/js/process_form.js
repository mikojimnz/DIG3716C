/* eslint-env browser */

window.onload = function () {
    "use strict"

    function disableFields() {
        var box = document.getElementById("inp_anom");

        if (box.checked) {
            document.getElementById("inp_fName").disabled = true;
            document.getElementById("inp_lName").disabled = true;
            document.getElementById("inp_fName").value = "";
            document.getElementById("inp_lName").value = "";
            document.getElementById("label_fName").removeAttribute("class");
            document.getElementById("label_lName").removeAttribute("class");
        } else {
            document.getElementById("inp_fName").disabled = false;
            document.getElementById("inp_lName").disabled = false;
        }
    }

    function validateData() {
        var fName = document.getElementById("inp_fName");
        var lName = document.getElementById("inp_lName");
        var email = document.getElementById("inp_email");
        var tel = document.getElementById("inp_tel");
        var url = document.getElementById("inp_url");
        var box = document.getElementById("inp_anom");
        var valid = true;

        if (!box.checked) {
            if (fName.value.length == 0) {
                valid = false;
            } else if (/^[A-Za-z]{1,}$/.test(fName.value)) {
                document.getElementById("label_fName").setAttribute("class", "check");
            } else {
                document.getElementById("label_fName").setAttribute("class", "error_name");
                valid = false;
            }

            if (lName.value.length == 0) {
                valid = false;
            } else if (/^[A-Za-z]{1,}$/.test(lName.value)) {
                document.getElementById("label_lName").setAttribute("class", "check");
            } else {
                document.getElementById("label_lName").setAttribute("class", "error_name");
                valid = false;
            }
        }

        if (email.value.length == 0) {
            valid = false;
        } else if (/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email.value)) {
            document.getElementById("label_email").setAttribute("class", "check");
        } else {
            document.getElementById("label_email").setAttribute("class", "error_email");
            valid = false;
        }


        if (tel.value.length == 0) {
            valid = false;
        } else if (/^\d{3}-\d{3}-\d{4}$/.test(tel.value)) {
            document.getElementById("label_tel").setAttribute("class", "check");
        } else {
            document.getElementById("label_tel").setAttribute("class", "error_tel");
            valid = false;
        }


        if (url.value.length == 0) {
            valid = false;
        } else if (/^http(s)?:\/\/([\w\d]{1,}.)+[A-Za-z]{2,}\/~[\w\d\c/]+$/.test(url.value)) {
            document.getElementById("label_url").setAttribute("class", "check");
        } else {
            document.getElementById("label_url").setAttribute("class", "error_url");
            valid = false;
        }


        return valid;

    }

    function formSubmit() {
        if (!validateData()) {
            document.getElementById("ansInfo").removeAttribute("class");
            return;
        } else {
            document.getElementById("ansInfo").setAttribute("class", "hide");
        }

        var q1 = document.querySelector('input[name="q1"]:checked');
        var q2 = document.querySelector('input[name="q2"]:checked');
        var q3 = document.querySelector('input[name="q3"]:checked');
        var score = 0;

        if (q1 == null || q2 == null || q3 == null) {
            document.getElementById("ansAll").removeAttribute("class");
            return;
        } else {
            document.getElementById("ansAll").setAttribute("class", "hide");
        }

        score += parseInt(q1.value) + parseInt(q2.value) + parseInt(q3.value);

        if (score < 2) {
            document.getElementById("result").textContent = "Novice";
            document.getElementById("badge").setAttribute("src", "./img/0.png");
        } else if (score <= 2 && score < 5) {
            document.getElementById("result").textContent = "Intermediate";
            document.getElementById("badge").setAttribute("src", "./img/1.png");
        } else if (score <= 6 && score < 7) {
            document.getElementById("result").textContent = "Advanced";
            document.getElementById("badge").setAttribute("src", "./img/2.png");
        } else {
            document.getElementById("result").textContent = "Expert";
            document.getElementById("badge").setAttribute("src", "./img/3.png");
        }

        document.getElementById("form-container").setAttribute("class", "hide");
        document.getElementById("result-container").removeAttribute("class");
    }

    document.body.addEventListener("keyup", validateData, false);
    document.getElementById("inp_anom").addEventListener("change", disableFields, false);
    document.getElementById("frm_submit").addEventListener("click", formSubmit, false);
}
