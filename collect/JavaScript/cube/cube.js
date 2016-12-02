(function(){
	window.onload = function(){
		var cube = document.getElementById('cube'),
			startX = 0,
			startY = 0,
			endX = 0,
			endY = 0,
			distanceX = 0,
			distanceY = 0,
			rotateY = 0,
			rotateX = 0,
			rotateZ = 0;
			
		var getDistance = function(distanceX, distanceY){
			return Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2));
		}
			
		cube.addEventListener('touchstart', function(e){
			startX = e.touches[0].clientX;
			startY = e.touches[0].clientY;
		});
		
		cube.addEventListener('touchmove', function(e){
			endX = e.touches[0].clientX;
			endY = e.touches[0].clientY;
			distanceX = endX - startX;
			distanceY = endY - startY;
			if(distanceX > 0 && Math.abs(distanceX) > Math.abs(distanceY)){
				//向右滑动
			}
			
			if(distanceX < 0 && Math.abs(distanceX) > Math.abs(distanceY)){
				//向左滑动
			}
			
			if(distanceY < 0 && Math.abs(distanceY) > Math.abs(distanceX)){
				//向上滑动
			}
			
			if(distanceY > 0 && Math.abs(distanceY) > Math.abs(distanceX)){
				//向下滑动
			}
		});
		
		cube.addEventListener('touchend', function(e){
			
			if(distanceX > 0 && Math.abs(distanceX) > Math.abs(distanceY)){
				//向右滑动
				rotateY += 90;
			}
			
			if(distanceX < 0 && Math.abs(distanceX) > Math.abs(distanceY)){
				//向左滑动
				rotateY -= 90;
			}
			
			if(distanceY < 0 && Math.abs(distanceY) > Math.abs(distanceX)){
				//向上滑动
				rotateX += 90;
			}
			
			if(distanceY > 0 && Math.abs(distanceY) > Math.abs(distanceX)){
				//向下滑动
				rotateX -= 90;
			}
			this.style.transform = 'rotateX('+ rotateX +'deg) rotateY('+ rotateY + 'deg) rotateZ('+ rotateZ +'deg)';
		});
	}
})();
