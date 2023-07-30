// Sample data for the leaderboard
const players = [
    { name: "Felhasználó1", score: 1000 },
    { name: "Felhasználó2", score: 800 },
    { name: "Felhasználó3", score: 700 },
    { name: "Felhasználó4", score: 300 },
    { name: "Felhasználó5", score: 200 },
    // Add more players here if needed
  ];
  
  // Function to generate the leaderboard HTML
  function generateLeaderboard() {
    // Sort players by score in ascending order
    const sortedPlayers = players.sort((a, b) => b.score - a.score);
  
    const leaderboardElement = document.getElementById("leaderboard");
    leaderboardElement.innerHTML = "";
  
    sortedPlayers.forEach((player, index) => {
      const playerElement = document.createElement("div");
      playerElement.classList.add("player");
  
      const nameElement = document.createElement("span");
      nameElement.innerText = player.name;
      playerElement.appendChild(nameElement);
  
      const scoreElement = document.createElement("span");
      scoreElement.innerText = ` - ${player.score} points`;
      playerElement.appendChild(scoreElement);
  
      leaderboardElement.appendChild(playerElement);
    });
  }
  
  // Call the function to generate the leaderboard when the page loads
  window.addEventListener("load", generateLeaderboard);
  