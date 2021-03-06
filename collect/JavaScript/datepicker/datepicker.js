;(function(win){
	'use strict';
	
	//生成元素并设置属性
	function createElem(ele, option){
		var elem = document.createElement(ele);
		for(var k in option){
			elem.setAttribute(k, option[k]);
		}
		return elem;
	}
	
	//停止冒泡
	function stopBubble(e){
		e = e || win.event;
		if(e.stopPropagation) {
		    e.stopPropagation();
		} else {
		    e.cancelBubble = true;
		}
	}
	
	//是否为闰年
	function isLeapYear(year){
		return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
	}
	
	//计算一个月有多少天
	function getDayOfMonth(year, month){
		var dayNums = 0;
		
		if(month == 2){
			dayNums = isLeapYear(year) ? 29 : 28;
		}else{
			//小于8的奇大偶小，大于等于8的偶大奇小
			dayNums = month < 8 ? (month % 2 == 1 ? 31 : 30) : (month % 2 == 1 ? 30 : 31);
		}
		
		return dayNums;
	}
	
	//获取日期列表dom string
	function getDateList(year, month, day){
		var list = '<tr>',
			currentDayNums = 0, //当前月天数
			prevDayNums = 0, //上一个月天数
			firstDayOfWeek = (new Date(year, month - 1, 1)).getDay(), //当月第一天是周几
			listArr = [],
			prevYear = month == 1 ? year - 1 : year,
			prevMonth = month == 1 ? 12 : month - 1,
			nextYear = month == 12 ? year + 1 : year,
			nextMonth = month == 12 ? 1 : month + 1;
		
		currentDayNums = getDayOfMonth(year, month);
		prevDayNums = getDayOfMonth(prevYear, prevMonth);
		
		for(var i = firstDayOfWeek-1; i >= 0; i--){
			listArr[i] = {
				value: prevDayNums--,
				date: prevYear + '-' + prevMonth + '-' + (prevDayNums + 1),
				cls: 'prev'
			};
		}
		
		for(var j = 1; j <= currentDayNums; j++){
			listArr.push({
				value: j,
				date: year + '-' + month + '-' + j,
			});
		}
		
		var len = listArr.length;
		for(var k = 1; k <= (42 - len); k++){
			listArr.push({
				value: k,
				date: nextYear + '-' + nextMonth + '-' + k,
				cls: 'next'
			});
		}
		
		listArr.forEach(function(item, index){
			var str = '<td data-date="'+ item.date +'" ' + (item.date == (year + '-' + month + '-' + day) ? 'class="active"' : (item.cls ? 'class="'+ item.cls +'"' : '')) + '>'+ item.value + '</td>' + ((index+1)%7 == 0 ? (index == 41 ? '</tr>' : '</tr><tr>') : '');
			list += str;
		});
		
		return list;
	}
	
	function Datepicker(options){
		//判断构造函数的调用方式，保证使用new调用
		if(!(this instanceof Datepicker)){
			return new Datepicker(options);
		}
		
		this.ver = '1.0.0';
		this.elem = document.querySelector(options.elem);
		this.parent = document.querySelector('.date-wrap');
		this.options = this.extend({
			show: false,
			year: '',
			month: '',
			day: '',
			list: ''
		}, options);
		
		//初始化
		this.init();
	}
	
	Datepicker.prototype = {
		constructor: Datepicker,
		init: function(){
			this.bindEvent();
		},
		//向dom插入数据
		insertDataToDom: function(){
			var _this = this;
			this.getDateAndList();
			this.parent.querySelector('.date-set-ym .y').innerHTML = this.options.year + '年';
			this.parent.querySelector('.date-set-ym .m').innerHTML = this.options.month + '月';
			this.parent.querySelector('tbody').innerHTML = _this.options.list;
			document.querySelectorAll('table td').forEach(function(item){
				item.addEventListener('click', function(e){
					var date = this.dataset.date;
					document.querySelector('table td.active').classList.remove('active');
					this.classList.add('active');
					_this.setDate(date);
					_this.clearCalendar()();
				})
			});
		},
		prevYear: function(){
			this.options.year -= 1;
			this.insertDataToDom();
		},
		nextYear: function(){
			this.options.year += 1;
			this.insertDataToDom();
		},
		prevMonth: function(){
			if(this.options.month == 1){
				this.options.month = 12;
				this.options.year -= 1;
			}else{
				this.options.month -= 1;
			}
			this.insertDataToDom();
		},
		nextMonth: function(){
			if(this.options.month == 12){
				this.options.month = 1;
				this.options.year += 1;
			}else{
				this.options.month += 1;
			}
			this.insertDataToDom();
		},
		//设置日期、列表dom string
		getDateAndList: function(){
			var options = this.options,
				date = options.year !== '' ? new Date(options.year, options.month-1, options.day) : new Date();

			options.year = date.getFullYear();
			options.month = date.getMonth() + 1;
			options.day = date.getDate();
			options.list = getDateList(options.year, options.month, options.day);
		},
		//选择日期后覆盖原有数值并填充到input里面
		setDate: function(date){
			var options = this.options,
				dateArr = [];
			
			date = date || options.year + '-' + options.month + '-' + options.day
			dateArr = date.split('-');
			
			this.elem.value = dateArr[0] + '-' + (dateArr[1] > 9 ? dateArr[1] : '0' + dateArr[1]) + '-' + (dateArr[2] > 9 ? dateArr[2] : '0' + dateArr[2]);
			options.year = Number(dateArr[0]);
			options.month = Number(dateArr[1]);
			options.day = Number(dateArr[2]);
		},
		//清空选中日期
		clearDate: function(){
			var options = this.options;
			
			this.elem.value = '';
		},
		//生成日期弹框
		renderCalendar: function(){
			var _this = this;
			return function(){
				var picker = document.querySelector('.ui-date');
				
				if(_this.options.show){ return }
				
				if(!picker){
					var picker = createElem('div', {
						class: 'ui-date no-select'
					});
					
					var innerHtml = 
							'<div class="date-header">'+
								'<i class="date-icon date-prev-y">&#xe65a;</i>'+
								'<i class="date-icon date-prev-m">&#xe603;</i>'+
								'<div class="date-set-ym">'+
									'<span class="y"></span>'+
									'<span class="m"></span>'+
								'</div>'+
								'<i class="date-icon date-next-m">&#xe602;</i>'+
								'<i class="date-icon date-next-y">&#xe65b;</i>'+
							'</div>'+
							'<div class="date-content">'+
								'<table>'+
									'<thead>'+
										'<tr>'+
											'<th>日</th>'+
											'<th>一</th>'+
											'<th>二</th>'+
											'<th>三</th>'+
											'<th>四</th>'+
											'<th>五</th>'+
											'<th>六</th>'+
										'</tr>'+
									'</thead>'+
									'<tbody>'+
									'</tbody>'+
								'</table>'+
							'</div>'+
							'<div class="date-footer">'+
								'<div class="date-btns">'+
									'<span class="date-btn-clear">清空</span><span class="date-btn-now">现在</span><span class="date-btn-confirm">确定</span>'+
								'</div>'+
							'</div>';
					
					picker.innerHTML = innerHtml;
					document.querySelector('.date-wrap').appendChild(picker);
					
					document.querySelector('.date-prev-y').addEventListener('click', function(e){
						_this.prevYear();
					})
					
					document.querySelector('.date-prev-m').addEventListener('click', function(e){
						_this.prevMonth();
					})
					
					document.querySelector('.date-next-y').addEventListener('click', function(e){
						_this.nextYear();
					})
					
					document.querySelector('.date-next-m').addEventListener('click', function(e){
						_this.nextMonth();
					})
					
					document.querySelector('.date-btn-clear').addEventListener('click', function(e){
						_this.clearDate();
						_this.clearCalendar()();
					});
					
					document.querySelector('.date-btn-now').addEventListener('click', function(e){
						_this.clearDate();
						_this.getDateAndList();
						_this.setDate();
						_this.clearCalendar()();
					});
					
					document.querySelector('.date-btn-confirm').addEventListener('click', function(e){
						_this.setDate();
						_this.clearCalendar()();
					});
				}
				
				_this.options.show = !_this.options.show;
				picker.classList.add('show');
				setTimeout(function(){
					picker.classList.add('animation');
				});
				
				_this.insertDataToDom();
			}
		},
		//清除日期弹框
		clearCalendar: function(){
			var _this = this;
			return function(){
				if(!_this.options.show){ return }
				_this.options.show = !_this.options.show;
				document.querySelector('.ui-date').classList.remove('show', 'animation');
			}
		},
		//绑定触发事件
		bindEvent: function(){
			var _this = this;
			
			_this.parent.addEventListener('click', stopBubble)
			
			_this.elem.addEventListener('focus', _this.renderCalendar());
			
			document.addEventListener('click', _this.clearCalendar());
		},
		extend: function(opt1, opt2){
			for(var k in opt2){
				opt1[k] = opt2[k];
			}
			return opt1;
		}
	}
	
	win.Datepicker = Datepicker;
	
})(window);
