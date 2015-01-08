function Opponent (gameboard, height, weight) {
	this.$gameboard = gameboard
	this.x = this.$gameboard.width() / 2;
	this.y = this.$gameboard.height() / 2;
	this.height = height
	this.width = weight
	this.speed = Math.floor(Math.random() * 3 + 1);
	this.dir = "none";
	this.initDisplay();
}

Opponent.prototype = {

	updateDisplay: function(){
		this.$opponent.css('top', this.y - this.height/2)
		this.$opponent.css('left', this.x - this.width/2)
	},

	initDisplay: function(){
		this.$opponent = $("<div class='opponent'></div>")
		$('#gameboard').append(this.$opponent);

		this.updateDisplay();
	},

	move: function(){
		oldX = this.x
		oldY = this.y

		switch(this.dir) {
			case 'right':
				this.x += this.speed;
				this.$player.css('background-image', "url('./public/imgs/playerright.gif')")
				break;
			case 'left':
				this.x -= this.speed;
				this.$player.css('background-image', "url('./public/imgs/playerleft.gif')")
				break;
			case 'up':
				this.y -= this.speed;
				this.$player.css('background-image', "url('./public/imgs/playerup.gif')")
				break;
			case 'down':
				this.y += this.speed;
				this.$player.css('background-image', "url('./public/imgs/playerdown.gif')")
				break;
		}

		if (!this.inbounds()) {
			this.x = oldX
			this.y = oldY
		}

		this.updateDisplay();
	},

	inbounds: function(){
		return this.x - this.width/2 > this.width/2 && this.x < this.$gameboard.width() && this.y - this.height/2 > this.height/2 && this.y < this.$gameboard.height()
	},

}