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
 * button click eventListeners -> scroll into view
 */
document.getElementById("login").addEventListener("click", (e) =>{
    screens.MENU.scrollIntoView();
});

document.getElementById("friends").addEventListener("click", (e) =>{
    screens.CONTENT.scrollIntoView("behavior: smooth");
    document.getElementById("screenHeader").innerHTML = "Friends List";
});
document.getElementById("friendReqsSent").addEventListener("click", (e) =>{
  screens.CONTENT.scrollIntoView("behavior: smooth");
  document.getElementById("screenHeader").innerHTML = "Friend Requests Sent List";
});
document.getElementById("blockedUsers").addEventListener("click", (e) =>{
  screens.CONTENT.scrollIntoView("behavior: smooth");
});
document.getElementById("deletedFriends").addEventListener("click", (e) =>{
  screens.CONTENT.scrollIntoView("behavior: smooth");
});
document.getElementById("hiddenFriends").addEventListener("click", (e) =>{
  screens.CONTENT.scrollIntoView("behavior: smooth");
});
document.getElementById("ignoredSnaps").addEventListener("click", (e) =>{
  screens.CONTENT.scrollIntoView("behavior: smooth");
});
document.getElementById("pendingReqs").addEventListener("click", (e) =>{
  screens.CONTENT.scrollIntoView("behavior: smooth");
});


