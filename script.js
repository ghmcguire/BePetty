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
 * This moves the user to the menu screen
 */
document.getElementById("login").addEventListener("click", (e) =>{
    screens.MENU.scrollIntoView({behavior: "smooth"});
});