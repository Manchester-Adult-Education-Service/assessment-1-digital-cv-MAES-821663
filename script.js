const nameHeading = document.querySelector("h1");
const hour = new Date().getHours();
const mainContainer = document.querySelector("main");
const headerBar = document.querySelector("header")
const subTitles = document.querySelectorAll("h2");
const Year = new Date().getFullYear();

if (hour < 12) {
    nameHeading.textContent = "Good Morning, Jack"
} else if (hour < 18) {
    nameHeading.textContent = "Good Afternoon, Jack"
} else {
    nameHeading.textContent = "Good Evening, Jack"
}


console.log ("The current hour is: " + 13);

