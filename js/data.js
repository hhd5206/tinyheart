var dataObj=function(){
	this.fruitNum=0;
	this.double=1;
	this.score=0;
	this.gameOver=false;
	this.alpha=0;
};


dataObj.prototype.draw=function(){

	context1.save();
	context1.shadowBlur=10;
	context1.shadowColor="#fff";
    context1.fillStyle="#fff";
	context1.fillText("Score:"+this.score,canvasWidth / 2,canvasHeight - 20);
	if(this.gameOver){
		this.alpha +=deltaTime * 0.0005;
		context1.fillStyle="rgba(255,255,255,"+this.alpha+")";
		context1.fillText("GAMEOVER",canvasWidth / 2,canvasHeight / 2);
	}
	context1.restore();
};

dataObj.prototype.addScore=function(){
	this.score +=this.fruitNum * 100 * this.double;
	this.fruitNum=0;
	this.double=1;
};