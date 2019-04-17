class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();

  }

  bindEvents() {
  
    this.$el.on("click", ".square", ( event => {
      let $square = $(event.target);
      this.makeMove($square);
    }))
  }

  makeMove($square) {
    let pos = $square.data("pos");
    console.log(pos);
    this.game.playMove(pos)
    let mark = this.game.board.grid[pos[0]][pos[1]];
    mark = mark.toUpperCase();
    $square.html(mark);
    // $square.removeClass();
    $square.addClass('clicked');

    if(this.game.board.isOver()) {
      
    }

  }

  setupBoard() {

    let $grid = $("<ul>");
    $grid.addClass("grid")
    for (let i = 0; i < 9; i++) {
      let $square = $("<li>");
      let pos = [Math.floor(i/3) , i%3];
      $square.addClass("square");
      $square.data("pos", pos)
      $grid.append($square);
    }

    this.$el.append($grid);

  }
}

module.exports = View;
