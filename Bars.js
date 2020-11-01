function Bar(color) {

	this.x = 0;
	this.y = 0;
	this.color = color;
	this.rotation = 0;

}

Bar.prototype.draw = function(context) {
	
	context.save();
	context.translate(this.x,this.y);
	context.lineWidth = 4;
	context.rotate(this.rotation);
	
	context.fillStyle = this.color;
	context.beginPath();
	context.moveTo(-100, 100);
	context.lineTo( 100, 100);
	context.lineTo( 100, -100);
	context.lineTo(-100, - 100);
	context.closePath();

	context.fill();
	context.stroke();


	context.restore();

};


Bar.prototype.getBounds = function() {

   return {
      x: this.x-50,
      y: this.y-50,
      width: 100,
      height: 100
   };
};

