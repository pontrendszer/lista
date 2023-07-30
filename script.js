// Sample data for the leaderboard
const players = [
  //{ name: "Felhasználó1", score: 1000 },
  //{ name: "Felhasználó2", score: 800 },
  //{ name: "Felhasználó3", score: 700 },
  //{ name: "Felhasználó4", score: 500 },
  //{ name: "Felhasználó5", score: 300 },
];

// Function to generate the leaderboard HTML
function generateLeaderboard() {
  // Sort players by score in ascending order
  const sortedPlayers = players.sort((a, b) => b.score - a.score);

  const leaderboardElement = document.getElementById("leaderboard");
  leaderboardElement.innerHTML = "";

  if (sortedPlayers.length === 0) {
    const errorMessage = document.createElement("p");
    errorMessage.innerText = "⌛A lista az 1. játék után frissül. Megértéseteket köszönöm!⌛";
    errorMessage.classList.add("error-message"); // Add error message class
    leaderboardElement.appendChild(errorMessage);
  } else {
    sortedPlayers.forEach((player, index) => {
      const playerElement = document.createElement("div");
      playerElement.classList.add("player");

      const rankElement = document.createElement("span");
      rankElement.innerText = `${index + 1}. `;
      playerElement.appendChild(rankElement);

      const nameElement = document.createElement("span");
      nameElement.innerText = player.name;
      playerElement.appendChild(nameElement);

      const scoreElement = document.createElement("span");
      scoreElement.innerText = ` - ${player.score} points`;
      playerElement.appendChild(scoreElement);

      leaderboardElement.appendChild(playerElement);
    });
  }
}

// Call the function to generate the leaderboard when the page loads
window.addEventListener("load", generateLeaderboard);
