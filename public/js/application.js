$(document).ready(function() {
	new Game();

	

	['left', 'right', 'up', 'down'].forEach(function(direction) {
	Mousetrap.bind(direction, function(){
		game.player.dir = direction
		game.player.movement = 4
	}, 'keydown');
	
	Mousetrap.bind(direction, function(){
		game.player.dir = direction
		game.player.movement = 0
	}, 'keyup');

});
