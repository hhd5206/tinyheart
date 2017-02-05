var aneObj=function(){
	this.rootx=[];
	this.headx=[];
	this.heady=[];
	this.amp=[];
	this.alpha=0;
};

aneObj.prototype.num=50;
aneObj.prototype.init=function(){
	for(var i=0;i<this.num;i++){
		this.rootx[i]=i * 16 +Math.random() * 10;
		this.headx[i]=this.rootx[i];
		this.heady[i]=canvasHeight - 250 + Math.random() * 50;
		this.amp[i]=Math.random() * 50 +50;
	}
};

aneObj.prototype.draw=function(){
	this.alpha +=deltaTime * 0.0007;
	var l=Math.sin(this.alpha);
	context2.save();
	context2.globalAlpha = 0.6;
	context2.strokeStyle="#3b154e";
	context2.lineWidth=20;
	context2.lineCap="round";
		for(var i=0;i<this.num;i++){
			this.headx[i]=this.rootx[i] + l * this.amp[i];
			context2.beginPath();
			context2.moveTo(this.rootx[i],canvasHeight);
			context2.quadraticCurveTo(this.rootx[i],canvasHeight - 100,this.headx[i],this.heady[i]);
			context2.stroke();
		}
	context2.restore();
};