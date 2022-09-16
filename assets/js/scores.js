const score1El = document.getElementById("score1");

let score1Data = JSON.parse(localStorage.getItem("Personal Score"));

score1El.innerHTML = `${score1Data.initials} ----- `;
