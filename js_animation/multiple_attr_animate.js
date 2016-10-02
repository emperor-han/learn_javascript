function startMove(obj,attr,myTarget){//obj 表示给那个对象添加该运动，attr 表示该对象的什么属性运动改变，myTarget表示该对象运动要达到的目标值
		    
			clearInterval(obj.timer);
			
			obj.timer = setInterval(function(){
				var speed = (myTarget-parseInt(getStyle(obj,attr)))/10;
				    speed = speed>0?Math.ceil(speed):Math.floor(speed);//是为了将speed变为整型，
				if(parseInt(getStyle(obj,attr)) === myTarget){
					
					clearInterval(obj.timer);
				}else{
					
					obj.style[attr] = parseInt(getStyle(obj,attr)) + speed + 'px';
					
				}
			},30);
}

function getStyle(obj,attr) {//该函数是为了获取内联样式
  
        return getComputedStyle(obj,false)[attr];
   
}