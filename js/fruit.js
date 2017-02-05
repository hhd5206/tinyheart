var fruitObj=function(){
	this.aLive=[];
	this.orange=new Image();
	this.blue=new Image();
	this.x=[];
	this.y=[];
	this.l=[];
	this.aneNum=[];
	this.fruitType=[];
	this.speed=[];
};

fruitObj.prototype.num=30;
fruitObj.prototype.init=function(){
	for(var i=0;i<this.num;i++){
		this.aLive[i]=false;
		this.x[i]=0;
		this.y[i]=0;
		this.fruitType[i]="";
		this.aneNum[i]=0;
		this.speed[i]=Math.random() * 0.016 + 0.004;
	}
	this.orange.src="./img/fruit.png";
	this.blue.src="./img/blue.png";
};
fruitObj.prototype.draw=function(){
	for(var i=0;i<this.num;i++){

		if(this.aLive[i]){
			if(this.fruitType[i] == "blue"){
				var pic=this.blue;
			}else{
				var pic=this.orange;
			}
			if(this.l[i]<14){
				this.x[i]=ane.headx[this.aneNum[i]];
				this.y[i]=ane.heady[this.aneNum[i]];
				this.l[i] += this.speed[i] * deltaTime;
			}else{
				this.y[i] -= this.speed[i] * 7 *deltaTime;
			}
			context2.drawImage(pic,this.x[i] - this.l[i] * 0.5,this.y[i] - this.l[i] * 0.5,this.l[i],this.l[i]);
			if(this.y[i]<10){
				this.aLive[i]=false;
			}
		}

	}
};

fruitObj.prototype.born=function(i){
	this.aneNum[i]=Math.floor(Math.random() * ane.num);
	this.l[i]=0;
	this.aLive[i]=true;
	var ran=Math.random();
	if(ran < 0.15){
		this.fruitType[i]="blue";
	}else{
		this.fruitType[i]="orange";
	}
};
fruitObj.prototype.dete=function(i){
	this.aLive[i]=false;
};
function fruitMonitor(){
	var num=0;
	for(var i=0;i<fruit.num;i++){
		if(fruit.aLive[i]) 
			num++;
	}
	if(num<15){
		sendFruit();
		return;
	}
}

function sendFruit(){
	for(var i=0;i<fruit.num;i++){
		if(!fruit.aLive[i]){
			fruit.born(i);
			return;
		}
	}
}