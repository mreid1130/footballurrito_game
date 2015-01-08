function Game() {
	this.$gameboard = $('#field');
	this.player = new Player(this.$gameboard);
	this.burritos = []
	this.opponents = []
	this.start = Date.now();
	this.burritoSpawnTime = this.start + 1500
	this.opponentSpawnTime = this.start + 1000
}

Game.prototype = {

	loop: function() {

		player = this.player

		if (Date.now() > this.burritoSpawnTime){
			this.spawnBurrito();
			this.burritoSpawnTime += Math.floor(Math.random() * 5000 + 2500)
		};

		if (Date.now() > this.opponentSpawnTime){
			this.spawnOpponent();
			this.opponentSpawnTime += Math.floor(Math.random() * 2500 + 1000)
		};

		this.burritos.forEach(function(burrito){
			if (player.hit(burrito)){
				burrito.eaten = true;
				burrito.destroy();
				player.grow();
			}
		});

		this.opponents.forEach(function(opponent){
			if (opponent.outOfBounds){
				opponent.destroy();
			} else if (player.hit(opponent)) {
				if (player.height >= opponent.height) {
					opponent.tackled()
					setTimeout(function(){
						opponent.destroy()
						opponent.down = true
					}, 250)
				} else {
					player.tackled()
					player.down = true
					setTimeout(function(){
						player.destroy()
					}, 250)
				}
			} else {
				opponent.move();
			}
		});

		if (!player.down) {
			player.move()
		}

		this.burritos = _(this.burritos).reject(function(burrito){
			return burrito.eaten;
		});

		this.opponents = _(this.opponents).reject(function(opponent){
			return (opponent.outOfBounds || opponent.down);
		});

	},

	spawnBurrito: function() {
		this.burritos.push(new Burrito(this.$gameboard))
	},

	spawnOpponent: function() {
		this.opponents.push(new Opponent(this.$gameboard))
	}

}
