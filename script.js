/**
 * This is a list of all three screens in the app
 */
const screens = {
    "WELCOME": document.getElementById("welcome"),
    "MENU": document.getElementById("menu"),
    "CONTENT": document.getElementById("content")
};

// function hideContent() {
//     screens.MENU.style.display = "none";
//     screens.CONTENT.style.display = "none";
    
// }

document.getElementById("login").addEventListener("click", (e) =>{
    screens.MENU.scrollIntoView();
});