/**
 * @解决数据加减乘除精度丢失问题
 */
var math = {
	
	//不固定参数加法
	add: function(){
		
		var result = 0,
			argLength = arguments.length;
		
		if(argLength == 0){ return result }
		
		for(var i = 0; i < argLength; i++){
			result = this.accAdd(result, arguments[i]);
		}
		
		return result;
	},
	
	//不固定参数减法
	sub: function(){
		var result = arguments[0],
			argLength = arguments.length;
		
		if(argLength == 0){ return 0 }
		
		for(var i = 1; i < argLength; i++){
			result = this.accSub(result, arguments[i]);
		}
		
		return result;
	},
	
	//不固定参数乘法
	mul: function(){
		var result = 1,
			argLength = arguments.length;
		
		if(argLength == 0){ return 0 }
		
		for(var i = 0; i < argLength; i++){
			result = this.accMul(result, arguments[i]);
		}
		
		return result;
	},
	
	//不固定参数除法
	div: function(){
		
		var result = arguments[0],
			argLength = arguments.length;
		
		if(argLength == 0){ return 0 }
		
		for(var i = 1; i < argLength; i++){
			result = this.accDiv(result, arguments[i]);
		}
		
		return result;
	},
	
	//精确加法（核心算法）
	accAdd: function(arg1, arg2) {
		var r1, r2, m;
		
		try{
			r1 = arg1.toString().split('.')[1].length;
		}catch(e){
			r1 = 0;
		}
		
		try{
			r2 = arg2.toString().split('.')[1].length;
		}catch(e){
			r2 = 0;
		}
		
		m = Math.pow(10, Math.max(r1, r2));
		
		return (arg1 * m + arg2 * m) / m;
	},
	
	//精确减法（核心算法）
	accSub: function(arg1, arg2) {
		var r1, r2, m;
		
		try {
			r1 = arg1.toString().split(".")[1].length;
		} catch(e) {
			r1 = 0;
		}
		
		try {
			r2 = arg2.toString().split(".")[1].length;
		} catch(e) {
			r2 = 0;
		}
		
		m = Math.pow(10, Math.max(r1, r2)); //动态控制精度长度
		
		return (arg1 * m - arg2 * m) / m;
	},
	
	//精确乘法（核心算法）
	accMul: function(arg1, arg2) {
		
		var r1, r2, m;
		
		try {
			r1 = arg1.toString().split('.')[1].length;
		} catch(e) {
			r1 = 0;
		}
		
		try {
			r2 = arg2.toString().split('.')[1].length;
		} catch(e) {
			r2 = 0;
		}
		
		m = Math.pow(10, r1+r2); //动态控制精度长度

		return Number(arg1.toString().replace('.', '')) * Number(arg2.toString().replace('.', '')) / m;
		
	},
	
	//精确除法（核心算法）
	accDiv: function(arg1, arg2) {
		var r1, r2, m;
			
		try {
			r1 = arg1.toString().split('.')[1].length
		} catch(e) {
			r1 = 0;
		}
		
		try {
			r2 = arg2.toString().split('.')[1].length
		} catch(e) {
			r2 = 0;
		}
		
		m = Math.pow(10, r1 - r2) //动态控制精度长度
		
		return Number(arg1.toString().replace('.', '')) / Number(arg2.toString().replace('.', '')) / m;
	},
	
};
