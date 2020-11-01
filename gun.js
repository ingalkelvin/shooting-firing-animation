function Gun() {

	this.x = 0;
	this.y = 0;

}

Gun.prototype.draw = function(context) {
	
	context.save();
	context.translate(this.x,this.y);
	context.lineWidth = 4;
	
	

	context.fillStyle = "#000000";
	context.beginPath();
	context.arc(0, -10, 35, 0, (Math.PI*2),true);
	context.closePath();
	context.fill();
	context.stroke();

	context.fillStyle ="red";
	context.beginPath();
	context.arc(0, -10, 30, 0, (Math.PI*2),true);
	context.closePath();
	context.fill();
	context.stroke();

	context.fillStyle = "#000000";
	context.beginPath();
	context.arc(0, -10, 25, 0, (Math.PI*2),true);
	context.closePath();
	context.fill();
	context.stroke();
	
	context.fillStyle ="red";
	context.beginPath();
	context.arc(0, -10, 20, 0, (Math.PI*2),true);
	context.closePath();
	context.fill();
	context.stroke();

	context.fillStyle = "#000000";
	context.beginPath();
	context.arc(0, -10, 15, 0, (Math.PI*2),true);
	context.closePath();
	context.fill();
	context.stroke();

	context.fillStyle ="red";
	context.beginPath();
	context.arc(0, -10, 10, 0, (Math.PI*2),true);
	context.closePath();
	context.fill();
	context.stroke();

	context.restore();

};

Gun.prototype.getBounds = function() {
   return {
      x: this.x - 35,
      y: this.y - 35,
      width: 35* 2,
      height: 35* 2
   };
};


