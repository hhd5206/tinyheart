var babyObj=function(){
	this.x;
	this.y;
	this.angle;


	this.babyTailTimer;
	this.babyTailcount;

	this.babyEyeTimer;
	this.babyEyecount;
	this.babyEyeInterval;

	this.babyBadyTimer;
	this.babyBadycount;
};

babyObj.prototype.init=function(){
	this.x=canvasWidth / 2 -50;
	this.y=canvasHeight / 2 +50;
	this.angle=0;

	this.babyTailcount=0;
	this.babyTailTimer=0;

	this.babyEyeTimer=0;
	this.babyEyecount=0;
	this.babyEyeInterval=1000;

	this.babyBadyTimer=0;
	this.babyBadycount=0;
};

babyObj.prototype.draw=function(){

	this.x=lerpDistance(mom.x,this.x,0.98);
	this.y=lerpDistance(mom.y,this.y,0.98);

	//算角度
	var deltaX=mom.x - this.x;
	var deltaY=mom.y - this.y;
	var bate=Math.atan2(deltaY,deltaX) + Math.PI;
	this.angle=lerpAngle(bate,this.angle,0.6);
	//尾巴
	this.babyTailTimer +=deltaTime;
	if(this.babyTailTimer >50){
		this.babyTailcount= (this.babyTailcount + 1) % 8;
		this.babyTailTimer=this.babyTailTimer % 50;
	}
	//眼睛
	this.babyEyeTimer+= deltaTime;
	if(this.babyEyeTimer > this.babyEyeInterval){
		this.babyEyecount= (this.babyEyecount + 1) % 2;
		this.babyEyeTimer %=this.babyEyeInterval;

		if(this.babyEyecount==0){
			this.babyEyeInterval = Math.random() * 1500 +2000;
		}else{
			this.babyEyeInterval =200;
		}
	}
	//身体
	this.babyBadyTimer +=deltaTime;
	if(this.babyBadyTimer>300){
		this.babyBadycount += 1;
		this.babyBadyTimer %=300;
		if(this.babyBadycount >= 19){
			this.babyBadycount=19;
			data.gameOver=true;
		}
	}

	context1.save();
	context1.translate(this.x,this.y);
	context1.rotate(this.angle);
	var babyTailcount=this.babyTailcount;
	context1.drawImage(babyTail[babyTailcount],-babyTail[babyTailcount].width / 2 +23,-babyTail[babyTailcount].height / 2);
	var babyBadycount=this.babyBadycount;
	context1.drawImage(babyBody[babyBadycount],-babyBody[babyBadycount].width / 2,-babyBody[babyBadycount].height / 2);
	var babyEyecount=this.babyEyecount;
	context1.drawImage(babyEye[babyEyecount],-babyEye[babyEyecount].width / 2,-babyEye[babyEyecount].height / 2);
	context1.restore();
};