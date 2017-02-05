var momObj=function(){
	this.x;
	this.y;
	this.angle;



	this.momTailTimer;
	this.momTailCount;

	this.momEyeTimer;
	this.momEyeCount;
	this.momEyeInterval;

	this.momBodyCount;
};

momObj.prototype.init=function(){
	this.x=canvasWidth / 2;
	this.y=canvasHeight / 2;
	this.angle=0;

	this.momTailTimer=0;
	this.momTailCount=0;

	this.momEyeTimer=0;
	this.momEyeCount=0;
	this.momEyeInterval=1000;

	this.momBodyCount=0;
};

momObj.prototype.draw=function(){
	//算距离
	this.x=lerpDistance(mx,this.x,0.98);
	this.y=lerpDistance(my,this.y,0.98);
	//算角度
	var deltaX=mx - this.x;
	var deltaY=my - this.y;
	var bate=Math.atan2(deltaY,deltaX) + Math.PI;
	this.angle=lerpAngle(bate,this.angle,0.6);
	//尾巴
	this.momTailTimer +=deltaTime;
	if(this.momTailTimer>50){
		this.momTailCount=(this.momTailCount + 1) % 8;
		this.momTailTimer %=50;
	}
	//眼睛
	this.momEyeTimer +=deltaTime;
	if(this.momEyeTimer > this.momEyeInterval){
		this.momEyeCount = (this.momEyeCount + 1) % 2;
		this.momEyeTimer %=this.momEyeInterval;
		if(this.momEyeCount==0){
			this.momEyeInterval = Math.random() * 1500 +2000;
		}else{
			this.momEyeInterval=200;
		}
	}
	context1.save();
	context1.translate(this.x,this.y);
	context1.rotate(this.angle);
	var momTailCount=this.momTailCount;
	context1.drawImage(momTail[momTailCount],- momTail[momTailCount].width / 2 + 30,- momTail[momTailCount].height / 2);
	var momBodyCount=this.momBodyCount;
	if(data.double==1){
		context1.drawImage(momBodyOra[momBodyCount],- momBodyOra[momBodyCount].width / 2,- momBodyOra[momBodyCount].height / 2);
	}else{
		context1.drawImage(momBodyBlue[momBodyCount],- momBodyBlue[momBodyCount].width / 2,- momBodyBlue[momBodyCount].height / 2);		
	}
	
	var momEyeCount=this.momEyeCount;
	context1.drawImage(momEye[momEyeCount],- momEye[momEyeCount].width / 2,- momEye[momEyeCount].height / 2);
	context1.restore();
};
