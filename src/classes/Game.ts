import Player from "./Player";

class Game {
  static init() {
    // get container
    const container = document.querySelector(".container") as HTMLDivElement;

    // create play button
    const button = document.createElement("button") as HTMLButtonElement;
    button.classList.add("my-6", "border-8", "border-green-600", "p-8");

    // add text to button
    const span = document.createElement("span") as HTMLSpanElement;
    span.classList.add("text-white", "text-3xl");
    const buttonText = document.createTextNode("Play");

    // link text to span
    span.appendChild(buttonText);

    //link span to button
    button.append(span);

    // link button to container
    container.append(button);

    // hover effect on button
    button.addEventListener("mouseover", () => {
      button.classList.remove("bg-green-400");
      button.classList.add("bg-green-600");
    });

    button.addEventListener("mouseout", () => {
      button.classList.remove("bg-green-600");
      button.classList.add("bg-green-400");
    });

    // remove button when clicked to start a party
    button.addEventListener("click", () => {
      button.remove();
      this.play();
    });
  }

  static play() {
    this.getPlayersName();

    // const playerOne = new Player(playerOneName);
    // const playerTwo = new Player(playerTwoName);
  }

  // get name of players

  static getPlayersName() {
    const playerOneName = undefined;

    const validationElm = ["", undefined, "number"];

    // while (validationElm.includes(typeof playerOneName)) {
    //   playerOneName = prompt("What is the name of the first player?") as string;
    // }

    return playerOneName;
  }
}

export default Game;
