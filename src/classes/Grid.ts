class Grid {
    

   
      board() {
        const container = $("#app") as JQuery<HTMLElement>;
        container?.addClass(
         "container flex justify-center flex-col items-center"
        );
         const grid = $("div") as JQuery<HTMLElement>;
         grid.addClass("w-96 h-96 border-8 border-indigo-600 flex");
         container?.appendTo(grid);
        const gridPiece = $("div") as JQuery<HTMLElement>;
        gridPiece.addClass("w-32 h-32 border-8 border-indigo-600");
    
       
        for (let i = 0; i < 8; i++) {

            grid.append(gridPiece)
        }
       

    }
}

export default Grid;