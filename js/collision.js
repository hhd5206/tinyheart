//大鱼跟果实的碰撞检测
function momFruitcollision(){
	if(!data.gameOver){
			for(var i=0;i<fruit.num;i++){
				if(fruit.aLive[i]){
					var l=calLength2(fruit.x[i],fruit.y[i],mom.x,mom.y);
					if(l<900){
						wave.born(fruit.x[i],fruit.y[i]);
						fruit.dete(i);
						data.fruitNum++;
						mom.momBodyCount++;
						if(mom.momBodyCount >=7){
							mom.momBodyCount=7;
						}
						if(fruit.fruitType[i]=="blue"){
							data.double=2;
						}
					} 
				}
			}
	}
}

//大鱼跟小鱼的碰撞
function momBabycollision(){

	if(data.fruitNum>0 && !data.gameOver){
		var l=calLength2(mom.x,mom.y,baby.x,baby.y);
		if(l<900){
			baby.babyBadycount=0;
			mom.momBodyCount=0;
			data.addScore();
			halo.born(baby.x,baby.y);
		}
	}
}