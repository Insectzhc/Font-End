;(function(win){
	
	function Slider(elemId) {
		this.curPage = 1;
		this.elem = document.querySelector(elemId);
		this.tipsElem = document.querySelectorAll('#tips li');
		this.slider = this.elem.querySelector('.slider');
		this.elemWidth = this.elem.offsetWidth;
		this.timeInterval = Date.now();
		this.timer = null;
		this.init();
	}
	
	Slider.prototype.init = function() {
		this.setDom();
		this.bindEvent();
	}
	
	Slider.prototype.setDom = function() {
		var items = this.slider.querySelectorAll('li'),
			len = items.length,
			firstChild = items[0].cloneNode(true),
			lastChild = items[len - 1].cloneNode(true);
		this.nodeLength = len;
		this.slider.style.width = (len + 2) * this.elemWidth + 'px';
		this.slider.insertBefore(lastChild, items[0]);
		this.slider.appendChild(firstChild);
		this.slider.style.transform = 'translateX(' + -this.elemWidth + 'px)';
	}
	
	Slider.prototype.bindEvent = function() {
		var prev = document.querySelector('#prev'),
			next = document.querySelector('#next'),
			tips = this.tipsElem,
			_this = this;
	
		if(prev) {
			prev.addEventListener('click', function(e) {
				_this.prev();
			})
		}
	
		if(next) {
			next.addEventListener('click', function(e) {
				_this.next();
			})
		}
	
		if(tips.length > 0) {
			tips.forEach(function(item, index) {
				item.addEventListener('click', function(e) {
					_this.toPage(index + 1);
				});
			});
		}
	
	}
	
	Slider.prototype.toPage = function(page) {
	
		if(this.nodeLength < page) {
			return console.warn('要跳转的页面不存在！');
		}
	
		this.curPage = page;
		this.slider.classList.add('transition');
		this.slider.style.transform = 'translateX(' + -this.elemWidth * this.curPage + 'px)';
	}
	
	Slider.prototype.next = function() {
		var _this = this;
	
		if(Date.now() - this.timeInterval < 500) {
			if(this.curPage === this.nodeLength + 1) {
				return;
			}
			clearTimeout(this.timer);
		}
	
		this.timeInterval = Date.now();
		this.slider.classList.add('transition');
		this.curPage++;
		this.slider.style.transform = 'translateX(' + -this.elemWidth * this.curPage + 'px)';
	
		if(this.curPage === this.nodeLength + 1) {
			this.timer = setTimeout(function() {
				_this.slider.classList.remove('transition');
				_this.slider.style.transform = 'translateX(' + -_this.elemWidth + 'px)';
				_this.curPage = 1;
				this.timeInterval = Date.now();
			}, 500)
		}
	}
	
	Slider.prototype.prev = function() {
		var _this = this;
	
		if(Date.now() - this.timeInterval < 500) {
			if(this.curPage === 0) {
				return;
			}
			clearTimeout(this.timer);
		}
	
		this.timeInterval = Date.now();
		this.slider.classList.add('transition');
		this.curPage--;
		this.slider.style.transform = 'translateX(' + -this.elemWidth * this.curPage + 'px)';
	
		if(this.curPage === 0) {
			this.timer = setTimeout(function() {
				_this.slider.classList.remove('transition');
				_this.slider.style.transform = 'translateX(' + -_this.elemWidth * _this.nodeLength + 'px)';
				_this.curPage = _this.nodeLength;
			}, 500)
		}
	}
	
	win.Slider = Slider;
	
})(window);
