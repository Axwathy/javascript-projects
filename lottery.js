const lotteryTickets = [1024, 3387, 5521, 7743, 8865, 2290, 4412, 6634, 9901, 1157];
function renderTickets() {
  const container = document.getElementById("ticket-list");
  container.innerHTML = "";  

  lotteryTickets.forEach(function(number) {
    const span = document.createElement("span");

    span.className = "ticket";

    span.textContent = "#" + number;


    container.appendChild(span);
  });
}

renderTickets();

function drawWinner() {
  const randomIndex = Math.floor(Math.random() * lotteryTickets.length);
  const winner = lotteryTickets[randomIndex];
  console.log("🎉 Lottery Winner Ticket Number:", winner);
  document.getElementById("winner-display").textContent = "🏆 Winner: #" + winner;
  document.getElementById("modal-winner-number").textContent = "#" + winner;
  const modal = new bootstrap.Modal(document.getElementById("winnerModal"));
  modal.show();
}