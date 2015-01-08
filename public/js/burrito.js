function Burrito (gameboard){
	this.$gameboard = gameboard
	this.height = 20
	this.width = 40
	this.x = Math.floor(Math.random() * this.$gameboard.width)
	this.y = Math.floor(Math.random() * this.$gameboard.height)
	this.initDisplay();
}

Burrito.prototype = {

	initDisplay: function(){
		this.$burrito = $("<div class='burrito'</div>")
		$('#field').append(this.$burrito)
	},

	destroy: function(){
		this.$burrito.remove();
	}

}

