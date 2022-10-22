/**
 * This is a list of all three screens in the app
 */
const screens = {
    "WELCOME": document.getElementById("welcome"),
    "MENU": document.getElementById("menu"),
    "CONTENT": document.getElementById("content")
};
/**
 * This loads friends.json file into an object called friendsList
 */
var friendsList = fetchFriends();
function fetchFriends() {
    fetch("friends.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        friendsList = data;
      });
  }


document.getElementById("login").addEventListener("click", (e) =>{
    screens.MENU.scrollIntoView();
});