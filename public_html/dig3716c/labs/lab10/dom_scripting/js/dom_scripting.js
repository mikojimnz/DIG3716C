function init() {
    var insert = document.getElementById("google");
    var container = document.createElement("div");
    var body = document.createElement("div");
    var profileImg = document.createElement("img");
    var cmt = document.createElement("textarea");
    var footer = document.createElement("div");
    var footerL = document.createElement("div");
    var footerR = document.createElement("div");
    var googleImg = document.createElement("img");
    var submitBtn = document.createElement("button");
    var cancelBtn = document.createElement("a");
    var footerText1 = document.createElement("p");
    var footerText2 = document.createElement("p");

    container.style.backgroundColor = "#C5DCF2";
    container.style.display = "block";
    container.style.padding = "20px";
    container.style.marginTop = "50px";
    container.style.height = "140px;"
    container.style.borderRadius = "3px";

    body.style.display = "block";
    body.style.marginBottom = "30px";
    body.style.height = "50px";

    profileImg.setAttribute("src", "img/03-google.png");
    profileImg.setAttribute("alt", "profile image");
    profileImg.style.cssFloat = "left";
    profileImg.style.display = "block";
    profileImg.style.width = "8%";

    cmt.style.cssFloat = "right";
    cmt.style.padding = "15px";
    cmt.style.display = "block";
    cmt.style.width = "80%";
    cmt.style.height = "20px";
    cmt.style.border = "2px solid #496A91";

    footer.style.display = "block";
    footer.style.height = "25px";
    footerL.style.cssFloat = "left";
    footerR.style.cssFloat = "right";

    googleImg.setAttribute("src", "img/03-google.png");
    googleImg.setAttribute("alt", "google");
    googleImg.style.display = "inline";

    submitBtn.textContent = "Post";
    submitBtn.setAttribute("type", "submit");
    submitBtn.style.display = "inline";
    submitBtn.style.width = "70px";
    submitBtn.style.backgroundImage = "linear-gradient(180deg, #fff, skyblue)";
    submitBtn.style.border = "1px solid #6f98c7";
    submitBtn.style.borderRadius = "3px";

    cancelBtn.textContent = "Cancel";
    cancelBtn.style.fontSize = "12px";
    cancelBtn.setAttribute("href", "#");
    cancelBtn.style.display = "inline";
    cancelBtn.style.color = "red";
    cancelBtn.style.textDecoration = "underline";

    footerText1.textContent = "google reader using johnfriskics@gmail.com";
    footerText1.style.display = "inline";
    footerText1.style.paddingLeft = "8px";
    footerText1.style.border = "none";
    footerText1.style.color = "#496A91";

    footerText2.textContent = "or";
    footerText2.style.paddingLeft = "5px";
    footerText2.style.paddingRight = "5px";
    footerText2.style.border = "none";
    footerText2.style.display = "inline";

    body.append(profileImg);
    body.append(cmt);
    container.append(body)

    footerL.append(googleImg);
    footerL.append(footerText1);
    footerR.append(submitBtn);
    footerR.append(footerText2);
    footerR.append(cancelBtn);
    footer.append(footerL);
    footer.append(footerR);
    container.append(footer);
    
    

    insert.insertAdjacentElement('afterbegin', container);
}

window.addEventListener('load', init, false);
