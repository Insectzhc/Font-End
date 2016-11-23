(function(win){
	win.loading = function(option){
		option = option || {};
		var options = {
			
		}
		var canvas = document.getElementById('loading'),
			ctx = canvas.getContext('2d');
			
		window.requestAnimFrame = (function(){
		  	return  window.requestAnimationFrame || 
			    window.webkitRequestAnimationFrame || 
			    window.mozRequestAnimationFrame    || 
			    window.oRequestAnimationFrame      || 
			    window.msRequestAnimationFrame     ||  
			    function( callback ){
			    window.setTimeout(callback, 1000 / 60);
		  	};
		})();
			
		function Progressbar(){
			this.width = 0;
			this.hue = 0;
			
			this.draw = function(){
				ctx.fillStyle = 'hsla(' + this.hue + ', 100%, 40%, 1)';
				ctx.fillRect(25, 80, this.width, 25);
				var grad = ctx.createLinearGradient(0,0,0,130);
				grad.addColorStop(0,"transparent");
    			grad.addColorStop(1,"rgba(0,0,0,0.5)");
    			ctx.fillStyle = grad;
    			ctx.fillRect(25,80,this.width,25);
			}
		}
		
		function Particle(){
			this.width = 0;
			this.height = 0;
			this.draw = function(){
				
			}
			
		}
		
		function draw(){
			
		}
		
		function animloop = function(){
			draw();
			requestAnimationFrame(animloop);
		}
		
	}
})(window || {})
