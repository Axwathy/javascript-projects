const lotteryTickets = [1024, 3387, 5521, 7743, 8865, 2290, 4412, 6634, 9901, 1157];

function renderTickets() {
  const container = document.getElementById("ticket-list");
  container.innerHTML = "";

  for (const number of lotteryTickets) {
    const span = document.createElement("span");
    span.className = "ticket";
    span.textContent = "#" + number;
    container.appendChild(span);
  }
}

renderTickets();

function drawWinner() {
  const randomIndex = Math.floor(Math.random() * lotteryTickets.length);
  const winner = lotteryTickets[randomIndex];

  console.log("Winner ticket:", winner);

  const winnerDisplay = document.getElementById("winner-display");
  winnerDisplay.textContent = "Winner: #" + winner;
  winnerDisplay.style.color = "red";

  const modalWinnerNumber = document.getElementById("modal-winner-number");
  modalWinnerNumber.textContent = "#" + winner;
  modalWinnerNumber.style.color = "red";

  const modal = new bootstrap.Modal(document.getElementById("winnerModal"));
  modal.show();
}
