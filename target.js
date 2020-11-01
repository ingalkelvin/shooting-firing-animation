function Target() {

	this.x = 0;
	this.y = 0;
	this.isShow = false;
	this.showDuration;
	this.isCivillian = "red";
}

Target.prototype.draw = function(context) {
	
	context.save();
	context.translate(this.x,this.y);
	context.lineWidth = 4;
	
	context.fillStyle = this.isCivillian;
	context.beginPath();
	context.moveTo(0, 0);
	context.lineTo( 0, 0);
	
	context.lineTo( 70, 50);
	context.lineTo( 70, 100);
	context.lineTo( -70, 100);
	context.lineTo(-70, 50);
	
	context.closePath();
	context.fill();
	context.stroke();

	context.fillStyle = this.isCivillian;
	context.beginPath();
	context.arc(0, -10, 35, 0, (Math.PI*2),true);
	context.closePath();
	context.fill();
	context.stroke();


	context.restore();

};


Target.prototype.getBounds = function() {

   return {
      x:  this.x - 70,
      y:  this.y - 50,
      width: 150,
      height: 150
   };
};



