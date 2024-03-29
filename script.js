// Sample data for the leaderboard
const players = [
 { name: "Dóra", score: 1 },
 { name: "Anna", score: 2 },
 { name: "Flóra", score: 2 },
 { name: "Hanna", score: 2 },
 { name: "Bálint", score: 2 },
 { name: "Julcsi", score: 1 },
 { name: "Sára", score: 2 },
 { name: "Finn", score: 2 },
 { name: "Leon", score: 2 },
 { name: "Regi", score: 1 },
];

// Function to generate the leaderboard HTML
function generateLeaderboard() {
  // Sort players by score in ascending order
  const sortedPlayers = players.sort((a, b) => b.score - a.score);

  const leaderboardElement = document.getElementById("leaderboard");
  leaderboardElement.innerHTML = "";

  if (sortedPlayers.length === 0) {
    const errorMessage = document.createElement("p");
    errorMessage.innerText = "❌A lista ki van kapcsolva.❌";
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
