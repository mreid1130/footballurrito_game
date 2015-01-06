function Player (gameboard) {
	this.$gameboard = gameboard
	this.x = this.$gameboard.width() / 2;
	this.y = this.$gameboard.height() / 2;
	this.height = 10
	this.width = 10
	this.speed = 4;
	this.dir = "none";
	this.initDisplay();
}

Player.prototype = {

	updateDisplay: function(){
		this.$player.css('top', this.y - this.height/2)
		this.$player.css('left', this.x - this.width/2)
	},

	initDisplay: function(){
		this.$player = $("<div class='player'></div>")
		$('#gameboard').append(this.$player);

		this.updateDisplay();
	},

	move: function(){
		oldX = this.x
		oldY = this.y

		switch(this.dir) {
			case 'right':
				this.x += this.speed;
				break;
			case 'left':
				this.x -= this.speed;
				break;
			case 'up':
				this.y -= this.speed;
				break;
			case 'down':
				this.y += this.speed;
				break;
		}

		if (!this.inbounds) {
			this.x = oldX
			this.y = oldY
		}
	},

	inbounds: function(){ 
		return this.x > this.width/2 && this.x < this.$gameboard.width() && this.y > this.height/2 && this.y < this.$gameboard.height()
	}

}