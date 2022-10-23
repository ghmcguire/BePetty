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

/**
 * Sorts users by a specific parameter
 * @param {*} list The array to be sorted. Must be a subarray of friendsList
 *                  (ex. friendsList["friends"])
 * @param {*} field The field to sort users by
 * @param {*} reversed Set to true for descending order or false for ascending
 * @returns A sorted list of friends
 */
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
 * This sets the count for each category
 */
document.getElementById("pFriends").innerHTML = friendsList["Friends"].length;
document.getElementById("pSent").innerHTML = friendsList["Friend Requests Sent"].length;

/**
 * This moves the user to the menu screen
 * button click eventListeners -> scroll into view
 */
document.getElementById("login").addEventListener("click", (e) =>{
    screens.MENU.scrollIntoView({behavior: "smooth"});
});

document.getElementById("friends").addEventListener("click", (e) =>{
  screens.CONTENT.scrollIntoView({behavior: "smooth"});
  document.getElementById("screenHeader").innerHTML = "Friends List";
});
document.getElementById("friendReqsSent").addEventListener("click", (e) =>{
screens.CONTENT.scrollIntoView({behavior: "smooth"});
document.getElementById("screenHeader").innerHTML = "Friend Requests Sent";
});
document.getElementById("blockedUsers").addEventListener("click", (e) =>{
screens.CONTENT.scrollIntoView({behavior: "smooth"});
document.getElementById("screenHeader").innerHTML = "Blocked Users";
});
document.getElementById("deletedFriends").addEventListener("click", (e) =>{
screens.CONTENT.scrollIntoView({behavior: "smooth"});
document.getElementById("screenHeader").innerHTML = "Deleted Friends";
});
document.getElementById("hiddenFriends").addEventListener("click", (e) =>{
screens.CONTENT.scrollIntoView({behavior: "smooth"});
document.getElementById("screenHeader").innerHTML = "Hidden Suggestions";
});
document.getElementById("ignoredSnaps").addEventListener("click", (e) =>{
screens.CONTENT.scrollIntoView({behavior: "smooth"});
document.getElementById("screenHeader").innerHTML = "Ignored Snapchatters";
});
document.getElementById("pendingReqs").addEventListener("click", (e) =>{
screens.CONTENT.scrollIntoView({behavior: "smooth"});
document.getElementById("screenHeader").innerHTML = "Pending Requests";
});

document.getElementById("openMenu").addEventListener("click", (e) =>{
    screens.MENU.scrollIntoView({behavior: "smooth"});
});