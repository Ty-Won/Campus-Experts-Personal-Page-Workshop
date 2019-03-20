function showContactForm(){
    // var view = document.getElementById("contact-form").getAttribute('display'); //mistake? getComputedStyle
    var view = getComputedStyle(document.getElementById("contact-form")).display;
    document.getElementById("contact-form").style.display = (view === "none" ? "block": "none");

}


function setSubject(value){
    console.log("success");
    // document.getElementById("email-subject").setAttribute("value",value);
}