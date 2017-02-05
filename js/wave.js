//大鱼吃果实特效
var waveObj=function(){
	this.x=[];
	this.y=[];
	this.aLive=[];
	this.r=[];
};

waveObj.prototype.num=10;
waveObj.prototype.init=function(){
	for(var i=0;i<this.num;i++){
		this.aLive[i]=false;
	}
};

waveObj.prototype.draw=function(){
	context1.save();
	context1.lineWidth=2;
	context1.shadowBlur=10;
	context1.shadowColor="#fff";
	for(var i=0;i<this.num;i++){
		if(this.aLive[i]){
			this.r[i] +=deltaTime * 0.04;
			if(this.r[i] > 50){
				this.aLive[i]=false;
				continue;
			}
			var alpha=1 - this.r[i] / 50;
			context1.beginPath();
			context1.arc(this.x[i],this.y[i],this.r[i],0,Math.PI * 2);
			context1.closePath();
			context1.strokeStyle="rgba(255,255,255,"+alpha+")";
			context1.stroke();
		}
	}
	context1.restore();
};

waveObj.prototype.born=function(x,y){
	for(var i=0;i<this.num;i++){
		if(!this.aLive[i]){
			this.aLive[i]=true;
			this.r[i]=10;
			this.x[i]=x;
			this.y[i]=y;
			return;
		}
	}
};