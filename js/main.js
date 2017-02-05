var canvas1,canvas2;
var context1,context2;

var canvasWidth,canvasHeight;
var deltaTime,lastTime;
var bgImg=new Image();

var ane;
var fruit;
var mom;
var momTail=[];
var momEye=[];
var momBodyOra=[];
var momBodyBlue=[];

var baby;
var babyTail=[];
var babyEye=[];
var babyBody=[];

var data;
var wave;
var halo;
var dust;
var dustPic=[];
var mx,my; //鼠标

document.body.onload=game;
function game(){
	init();
	lastTime=Date.now();
	deltaTime=0;
	gameloop();
}

function init(){
	canvas1=document.getElementById("canvas1");
	canvas2=document.getElementById("canvas2");

	context1=canvas1.getContext("2d");
	context2=canvas2.getContext("2d");

	canvasWidth=canvas1.width;
	canvasHeight=canvas1.height;

	canvas1.addEventListener("mousemove",onMouseMove,false);
	//canvas1.addEventListener("touchmove",onMouseMove,false);
	ane=new aneObj();
	ane.init();

	fruit=new fruitObj();
	fruit.init();

	mom=new momObj();
	mom.init();
	bgImg.src="./img/background.jpg";

	mx=canvasWidth / 2;
	my= canvasHeight / 2;

	baby=new babyObj();
	baby.init();

	for(var i=0;i<8;i++){
		babyTail[i]=new Image();
		babyTail[i].src="./img/babyTail"+ i +".png";
	}


	for(var i=0;i<2;i++){
		babyEye[i]=new Image();
		babyEye[i].src="./img/babyEye"+ i +".png";
	}

	for(var i=0;i<20;i++){
		babyBody[i]=new Image();
		babyBody[i].src="./img/babyFade"+ i +".png";
	}

	for (var i = 0; i< 8; i++) {
		momTail[i]=new Image();
		momTail[i].src="./img/bigTail"+i+".png";
	}

	for (var i = 0; i< 2; i++) {
		momEye[i]=new Image();
		momEye[i].src="./img/bigEye"+i+".png";
	}

	data=new dataObj();

	for (var i = 0; i< 8; i++) {
		momBodyOra[i]=new Image();
		momBodyOra[i].src="./img/bigSwim"+i+".png";
		momBodyBlue[i]=new Image();
		momBodyBlue[i].src="./img/bigSwimBlue"+i+".png";
	}


	context1.font="30px Verdana";
	context1.textAlign="center";

	wave=new waveObj();
	wave.init();

	halo=new haloObj();
	halo.init();

	dust=new dustObj();
	dust.init();
	for(var i=0; i<7 ;i++){
		dustPic[i]=new Image();
		dustPic[i].src="./img/dust"+i+".png";
	}
	
}

function gameloop(){
	window.requestAnimFrame(gameloop);
	var now=Date.now();
	deltaTime=now - lastTime;
	lastTime=now;
	if(deltaTime>40) deltaTime=40;
	drawBackground();

	ane.draw();

	fruitMonitor();
	fruit.draw();

	context1.clearRect(0,0,canvasWidth,canvasHeight);
	mom.draw();
	baby.draw();
	data.draw();
	wave.draw();
	halo.draw();
	dust.draw();
	momFruitcollision();	
 	momBabycollision();
	
}

function onMouseMove(e){
	if(!data.gameOver){
		if(e.offsetX || e.layerX){
			mx= e.offSetX ==undefined ? e.layerX : e.offSetX;
			my= e.offSetY ==undefined ? e.layerY : e.offSetY;
		}else if(e.touchmove){
			mx=touch.pageX;
			my=touch.pageY;
		}
	}
}