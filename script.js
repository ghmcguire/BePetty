/**
 * This is a list of all three screens in the app
 */
const screens = {
    "WELCOME": document.getElementById("welcomeScreen"),
    "MENU": document.getElementById("menuScreen"),
    "CONTENT": document.getElementById("contentScreen")
};
const options = {
    "FRIENDS": document.getElementById("friends"),
    "SENT": document.getElementById("friendsReqsSent"),
    "BLOCKED": document.getElementById("blockedUsers"),
    "DELETED": document.getElementById("deletedFriends"),
    "HIDDEN": document.getElementById("hiddenFriends"),
    "IGNORED": document.getElementById("ignoredSnaps"),
    "PENDING": document.getElementById("pendingReqs")
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

function sortUsers(list, field, reversed) {
    let output = null;
    if (field.includes("Timestamp")) {
        output = list.sort(function(a,b) {
            return Date.parse(a[field]) - Date.parse(b[field]);
        });
    } else {
        output = list.sort(function(a,b) {
            return a[field] - b[field];
        });
    }
    if (reversed) {
        return output.reverse()
    } else {
        return output;
    }
}
/**
 * button click eventListeners -> scroll into view
 */
/**
 * This moves the user to the menu screen
 */
document.getElementById("login").addEventListener("click", (e) =>{
    screens.MENU.scrollIntoView({behavior: "smooth"});
});
