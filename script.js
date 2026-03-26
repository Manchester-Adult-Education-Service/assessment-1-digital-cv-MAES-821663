const nameHeading = document.querySelector("h1");
const hour = new Date().getHours();
const mainContainer = document.querySelector("main");
const headerBar = document.querySelector("header")
const subTitles = document.querySelectorAll("h2");
const Year = new Date().getFullYear();

const quoteBtn = document.getElementById("quote-btn");
const quoteText = document.getElementById("quote-text");
const quoteAuthor = document.getElementById("quote-author");

if (hour < 12) {
    nameHeading.textContent = "Good Morning, Jack"
} else if (hour < 18) {
    nameHeading.textContent = "Good Afternoon, Jack"
} else {
    nameHeading.textContent = "Good Evening, Jack"
}

quoteBtn.addEventListener("click", function(){
    quoteText.textContent = "Fetching..."
    fetch("https://dummyjson.com/quotes/random")
    .then(Response => Response.json())
    .then(data => {
        quoteText.textContent = `"${data.quote}"`;
        quoteAuthor.textContent = `"${data.author}"`;
    })
    .catch(Error => {quoteText.textContent = "Apologies"});
});

console.log ("The current hour is: " + 13);

