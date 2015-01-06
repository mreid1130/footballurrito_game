$(document).ready(function() {
	game = new Game();

	setInterval(function(){
		game.loop()
	}, 20);

	['left', 'right', 'up', 'down'].forEach(function(direction) {
		Mousetrap.bind(direction, function(){
			game.player.dir = direction
			game.player.movement = 4
		}, 'keydown');

		Mousetrap.bind(direction, function(){
			game.player.dir = direction
			game.player.movement = 0
			game.player.css('background-image', "url('../imgs/standingplayer.png')")
		}, 'keyup');
	})

});
