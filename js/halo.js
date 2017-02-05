var haloObj=function(){
	this.x=[];
	this.y=[];
	this.aLive=[];
	this.r=[];
};

haloObj.prototype.num=5;
haloObj.prototype.init=function(){
	for(var i=0;i<this.num;i++){
		this.x[i]=0;
		this.y[i]=0;
		this.aLive[i]=false;
		this.r[i]=0;
	}
};

haloObj.prototype.draw=function(){
	context1.save();
	context1.lineWidth=3;
	context1.shadowBlur=10;
	context1.shadowColor="rgba(203,91,0,1)";
	for(var i=0;i<this.num;i++){
		this.r[i] +=deltaTime * 0.05;
		if(this.r[i] >=50){
			this.aLive[i]=false;
			break;
		}
		var alpha=1 - this.r[i] / 50;
		if(this.aLive[i]){
			context1.beginPath();
			context1.arc(this.x[i],this.y[i],this.r[i],0,2 * Math.PI);
			context1.closePath();
			context1.strokeStyle="rgba(203,91,0,"+alpha+")";
			context1.stroke();
		}
	}
	context1.restore();
};

haloObj.prototype.born=function(x,y){
	for(var i=0;i<this.num;i++){
		if(!this.aLive[i]){
			this.x[i]=x;
			this.y[i]=y;
			this.aLive[i]=true;
			this.r[i]=5;
			return;
		}
	}
};