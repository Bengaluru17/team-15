/* 

I built this login form to block the front end of most of my freelance wordpress projects during the development stage. 

This is just the HTML / CSS of it but it uses wordpress's login system. 

Nice and Simple

*/

function validateForm() {
    var u = document.forms["admin_login"]["u"].value;
    var p = document.forms["admin_login"]["p"].value;

    if (u != "admin" && p != "admin") {
        alert("Invalid username or password");
        return false;
    }
    
}