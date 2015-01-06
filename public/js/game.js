function Game() {
	this.$gameboard = $('#gameboard');
	this.player = new Player(this.$gameboard);
}

Game.prototype = {

	loop: function() {
		this.player.move()
	}

}
