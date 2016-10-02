function startMove(obj,attr,myTarget){//obj 表示给那个对象添加该运动，attr 表示该对象的什么属性运动改变，myTarget表示该对象运动要达到的目标值
		    
			clearInterval(obj.timer);
			var cur_value = 0;
			
			obj.timer = setInterval(function(){
				if(attr === 'opacity'){
                   cur_value = parseFloat(getStyle(obj,attr))*100;
				}else{
				   cur_value = parseInt(getStyle(obj,attr));
				}
			 var   speed = (myTarget-cur_value)/10;
                   speed = speed>0?Math.ceil(speed):Math.floor(speed);//是为了将speed变为整型，
				    
				if(cur_value === myTarget){
					
					clearInterval(obj.timer);
				}else{
					if(attr === 'opacity'){
	                   obj.style[attr] = (cur_value + speed)/100;
					}else{
					   obj.style[attr] = cur_value + speed + 'px';
					}
					
					
				}
			},30);
}

function getStyle(obj,attr) {//该函数是为了获取内联样式
  
        return getComputedStyle(obj,false)[attr];
   
}