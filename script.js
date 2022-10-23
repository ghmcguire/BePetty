/**
 * This is a list of all three screens in the app
 */
const screens = {
    "WELCOME": document.getElementById("welcomeScreen"),
    "MENU": document.getElementById("menuScreen"),
    "CONTENT": document.getElementById("contentScreen")
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

function sortUsersByTimestamp(list, field) {
    if (field.contains("Timestamp")) {
        return list.sort(function(a,b) {
            return Date.parse(a[field]) - Date.parse(b[field]);
        });
    } else {
        return list.sort(function(a,b) {
            return a[field] - b[field];
        });
    }
}

/**
 * This moves the user to the menu screen
 */
document.getElementById("login").addEventListener("click", (e) =>{
    screens.MENU.scrollIntoView({behavior: "smooth"});
});