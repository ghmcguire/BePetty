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

var friendContainer = document.getElementById("friendContainer");

/**
 * This function creates a friend card
 */
function createCard([img, friendName, username]){
    let code = `
        <div class="card">
            <img class="userSnapcode" src="${img}">
            <h2 class="friendName">${friendName}</h2>
            <h3 class="username">@${username}</h3>
        </div>
    `;
    friendContainer.innerHTML += code;
}

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
        setCount();
        setUser();
      });
}

var friendsList;

/**
 * This allows the user to upload their json file and to scroll afterwards
 */
 document.getElementById("login").addEventListener("click", (e) =>{
  document.getElementById("selectFiles").click();  
  document.getElementById("selectFiles").addEventListener('change', function(e){
    var file = document.getElementById("selectFiles").files;
    if (file.length <= 0) {
      return false;
    };
    screens.MENU.scrollIntoView({behavior: "smooth"});
    // friendsList = new FileReader();
    // friendsList.readAsText(file.item(0))
    // friendsList.onload = () => {
    //   friendsList = JSON.parse(friendsList.result);
    //   setUser();
    //   setCount();
    // }
  })
});

/**
 * This sets the count for each category
 */
 function setCount() {
  document.getElementById("pFriends").innerHTML = friendsList["Friends"].length;
  document.getElementById("pSent").innerHTML = friendsList["Friend Requests Sent"].length;
  document.getElementById("pBlocked").innerHTML = friendsList["Blocked Users"].length;
  document.getElementById("pDeleted").innerHTML = friendsList["Deleted Friends"].length;
  document.getElementById("pHidden").innerHTML = friendsList["Hidden Friend Suggestions"].length;
  document.getElementById("pIgnored").innerHTML = friendsList["Ignored Snapchatters"].length;
  document.getElementById("pPending").innerHTML = friendsList["Pending Requests"].length;
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
            if (a[field] < b[field]) {
                return -1;
            }
            if (a[field] > b[field]) {
                return 1;
            }
            return 0;
        });
    }
    if (reversed) {
        return output.reverse()
    } else {
        return output;
    }
}

/**
 * This sets up the user's profile info
 */
function setUser() {
  var mainUser = sortUsers(friendsList["Friends"], "Creation Timestamp", false)[0];
  document.getElementById("userFullName").innerHTML = mainUser["Display Name"];
  document.getElementById("username").innerHTML = "@" + mainUser["Username"];
  var imgString = "https://app.snapchat.com/web/deeplink/snapcode?username=" + mainUser["Username"] + "&type=SVG&bitmoji=disable";
  document.getElementById("userImage").src =  imgString; 
}

function removeAllChilds() {
    while (friendContainer.firstChild) {
        friendContainer.removeChild(friendContainer.firstChild);
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

document.getElementById("friends").addEventListener("click", (e) =>{
removeAllChilds()
screens.CONTENT.scrollIntoView("behavior: smooth");
friendsList["Friends"].forEach((user) => {
    createCard(["https://app.snapchat.com/web/deeplink/snapcode?username=" + user["Username"] + "&type=SVG&bitmoji=disable", user["Display Name"],user["Username"]])
})
document.getElementById("screenHeader").innerHTML = "Friends List";
});
document.getElementById("friendReqsSent").addEventListener("click", (e) =>{
removeAllChilds()
screens.CONTENT.scrollIntoView("behavior: smooth");
friendsList["Friend Requests Sent"].forEach((user) => {
    createCard(["https://app.snapchat.com/web/deeplink/snapcode?username=" + user["Username"] + "&type=SVG&bitmoji=disable", user["Display Name"],user["Username"]])
})
document.getElementById("screenHeader").innerHTML = "Friend Requests Sent";
});
document.getElementById("blockedUsers").addEventListener("click", (e) =>{
removeAllChilds()
screens.CONTENT.scrollIntoView("behavior: smooth");
friendsList["Blocked Users"].forEach((user) => {
    createCard(["https://app.snapchat.com/web/deeplink/snapcode?username=" + user["Username"] + "&type=SVG&bitmoji=disable", user["Display Name"],user["Username"]])
})
document.getElementById("screenHeader").innerHTML = "Blocked Users";
});
document.getElementById("deletedFriends").addEventListener("click", (e) =>{
removeAllChilds()
screens.CONTENT.scrollIntoView("behavior: smooth");
friendsList["Deleted Friends"].forEach((user) => {
    createCard(["https://app.snapchat.com/web/deeplink/snapcode?username=" + user["Username"] + "&type=SVG&bitmoji=disable", user["Display Name"],user["Username"]])
})
document.getElementById("screenHeader").innerHTML = "Deleted Friends";
});
document.getElementById("hiddenFriends").addEventListener("click", (e) =>{
removeAllChilds()
screens.CONTENT.scrollIntoView("behavior: smooth");
friendsList["Hidden Friend Suggestions"].forEach((user) => {
    createCard(["https://app.snapchat.com/web/deeplink/snapcode?username=" + user["Username"] + "&type=SVG&bitmoji=disable", user["Display Name"],user["Username"]])
})
document.getElementById("screenHeader").innerHTML = "Hidden Suggestions";
});
document.getElementById("ignoredSnaps").addEventListener("click", (e) =>{
removeAllChilds()
screens.CONTENT.scrollIntoView("behavior: smooth");
friendsList["Ignored Snapchatters"].forEach((user) => {
    createCard(["https://app.snapchat.com/web/deeplink/snapcode?username=" + user["Username"] + "&type=SVG&bitmoji=disable", user["Display Name"],user["Username"]])
})
document.getElementById("screenHeader").innerHTML = "Ignored Snapchatters";
});
document.getElementById("pendingReqs").addEventListener("click", (e) =>{
removeAllChilds()
screens.CONTENT.scrollIntoView("behavior: smooth");
friendsList["Pending Requests"].forEach((user) => {
    createCard(["https://app.snapchat.com/web/deeplink/snapcode?username=" + user["Username"] + "&type=SVG&bitmoji=disable", user["Display Name"],user["Username"]])
})
document.getElementById("screenHeader").innerHTML = "Pending Requests";
});