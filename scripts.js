/* Add your JavaScript to this file */
window.onload = function() {
    var btn = document.querySelector("button");
    var m = document.getElementsbyClassName("message");
    btn.addEventListener("click", function(event) {
        event.preventDefault();
        var t = document.getElementbyId("email").value;
        if (t != "") {
            m[0].innerHTML = "Thank you! Your email address " + t + " has been added to our mailing list!";
        } 
        else {
            m[0].innerHTML = "Please enter a valid email address";
        }
    });
}