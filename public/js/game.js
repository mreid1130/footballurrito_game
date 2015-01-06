function Game() {
	this.$gameboard = $('#gameboard');
	this.player = new Player();
}

Game.prototype = {
	
	loop: function() {
		player.move()
	}
	
}