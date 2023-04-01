// Chess pieces unicode characters
const pieces = {
  "p": "&#xf445;",
  "r": "&#xf448;",
  "n": "&#xf44d;",
  "b": "&#xf447;",
  "q": "&#xf446;",
  "k": "&#xf44e;",
};

// Chess board array
const board = [
  ["r", "n", "b", "q", "k", "b", "n", "r"],
  ["p", "p", "p", "p", "p", "p", "p", "p"],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["P", "P", "P", "P", "P", "P", "P", "P"],
  ["R", "N", "B", "Q", "K", "B", "N", "R"],
];

// Create the chess board
const chessBoard = document.getElementById("board");
for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 8; j++) {
    const square = document.createElement("div");
    square.className = `square ${i % 2 === j % 2 ? "white" : "black"}`;
    if (board[i][j] !== "") {
      const piece = document.createElement("div");
      piece.className = "piece";
      piece.innerHTML = pieces[board[i][j].toLowerCase()];
      square.appendChild(piece);
    }
    chessBoard.appendChild(square);
  }
}
