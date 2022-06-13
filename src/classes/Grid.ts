import { GridElmstate } from "../lib/interfaces/GridElmState";
import { GridState } from "../lib/utils/GridState";

class Grid {
  static state: GridElmstate = GridState;
  static drawBoard() {
    // get main div
    const app = document.getElementById("app") as HTMLDivElement;

    // create a container and link it to main div
    const container = document.createElement("div") as HTMLDivElement;
    container?.classList.add("container", "flex", "justify-center", "flex-col", "items-center");
    app?.append(container);

    console.log(typeof container);

    // create a grid and link it to container
    const grid = document.createElement("div");
    grid.classList.add("w-96", "h-96", "border-8", "grid", "grid-cols-3", "border-indigo-600");
    container?.append(grid);

    // create a score card
    const scoreCardContainer = document.createElement("div") as HTMLDivElement;
    scoreCardContainer.id = "score";
    const scoreCardText = document.createElement("p") as HTMLParagraphElement;
    scoreCardText.innerText = "C'est au tour du joueur : ";
    const scoreCardSpan = document.createElement("span") as HTMLSpanElement;
    scoreCardSpan.id = "player";

    // create gridElm and link them all to the grid

    const nb = 9;
    for (let i = 0; i < nb; i++) {
      const gridElm = document.createElement("div") as HTMLDivElement;
      gridElm.classList.add("border-8", "border-indigo-500", "flex", "align-center", "content-center");
      gridElm.id = `gridElm${i + 1}`;
      const gridElmSpan = document.createElement("span") as HTMLSpanElement;
      gridElm.append(gridElmSpan);
      grid.append(gridElm);
      gridElm.addEventListener("click", () => {
        // update state of elm
        const idGridElm = gridElm.id;
        if (Grid.state[idGridElm] !== 0) return;
        Grid.state[idGridElm] = Grid.state.playerInProgress;

        if (Grid.state.playerInProgress === 1) {
          gridElmSpan.textContent = "X";
          gridElmSpan.classList.add("w-full", "h-full", "text-6xl", "text-center", "text-amber-500");
          Grid.state.playerInProgress = 2;
        } else if (Grid.state.playerInProgress === 2) {
          gridElmSpan.textContent = "0";
          gridElmSpan.classList.add("w-full", "h-full", "text-6xl", "text-center");
          Grid.state.playerInProgress = 1;
        }
        Grid.checkWin(Grid.state);
        if (Grid.state.wins === 1) {
          Grid.restartGame;
        }
        Grid.state.wins === 0;
      });
    }
  }

  static checkWin(state: GridElmstate) {
    if (
      (state.gridElm1 === 1 && state.gridElm2 === 1 && state.gridElm3 === 1) ||
      (state.gridElm4 === 1 && state.gridElm5 === 1 && state.gridElm6 === 1) ||
      (state.gridElm7 === 1 && state.gridElm8 === 1 && state.gridElm9 === 1) ||
      (state.gridElm1 === 1 && state.gridElm4 === 1 && state.gridElm7 === 1) ||
      (state.gridElm2 === 1 && state.gridElm5 === 1 && state.gridElm8 === 1) ||
      (state.gridElm3 === 1 && state.gridElm6 === 1 && state.gridElm9 === 1) ||
      (state.gridElm1 === 1 && state.gridElm5 === 1 && state.gridElm9 === 1) ||
      (state.gridElm3 === 1 && state.gridElm5 === 1 && state.gridElm7 === 1)
    ) {
      console.log("player 1 wins");
      Grid.restartGame();
      Grid.state.wins = 1;
    } else if (
      (state.gridElm1 === 2 && state.gridElm2 === 2 && state.gridElm3 === 2) ||
      (state.gridElm4 === 2 && state.gridElm5 === 2 && state.gridElm6 === 2) ||
      (state.gridElm7 === 2 && state.gridElm8 === 2 && state.gridElm9 === 2) ||
      (state.gridElm1 === 2 && state.gridElm4 === 2 && state.gridElm7 === 2) ||
      (state.gridElm2 === 2 && state.gridElm5 === 2 && state.gridElm8 === 2) ||
      (state.gridElm3 === 2 && state.gridElm6 === 2 && state.gridElm9 === 2) ||
      (state.gridElm1 === 2 && state.gridElm5 === 2 && state.gridElm9 === 2) ||
      (state.gridElm3 === 2 && state.gridElm5 === 2 && state.gridElm7 === 2)
    ) {
      console.log("player 2 wins");
      Grid.restartGame();
      Grid.state.wins = 1;
    }
  }

  static restartGame() {
    const newstate: GridElmstate = {
      playerInProgress: 1,
      gridElm1: 0,
      gridElm2: 0,
      gridElm3: 0,
      gridElm4: 0,
      gridElm5: 0,
      gridElm6: 0,
      gridElm7: 0,
      gridElm8: 0,
      gridElm9: 0,
    };

    Grid.state = newstate;
    return Grid.state;
  }
}

export default Grid;
