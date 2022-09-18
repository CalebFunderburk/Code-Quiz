// Variables for html
const score1El = document.getElementById("score1");
const score2El = document.getElementById("score2");
const score3El = document.getElementById("score3");
const score4El = document.getElementById("score4");
const score5El = document.getElementById("score5");

// Get data from local storage
let scoreData = JSON.parse(localStorage.getItem("Personal Score"));

// Display data from local storage
score1El.innerHTML = `${scoreData.initials} ----- ${scoreData.score}`;
