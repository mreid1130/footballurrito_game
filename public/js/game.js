function Game() {
	this.$gameboard = $('#field');
	this.player = new Player(this.$gameboard);
	this.burritos = []
	this.start = Date.now();
	this.burritoSpawnTime = this.start + 1500
}

Game.prototype = {

	loop: function() {
		player = this.player
		player.move()

		if (Date.now() > this.burritoSpawnTime){
			this.spawnBurrito();
		}

		this.burritos.forEach(function(burrito){
			if (player.hit(burrito)){
				burrito.eaten = true;
				player.grow();
			}
		});

		this.burritos = _(this.burritos).reject(function(burrito){
			return burrito.eaten;
		});

	},

	spawnBurrito: function() {
		this.burritos.push(new Burrito(this.$gameboard))
	}

}
