$(document).ready(function(){
	var $p1 = $('.p1'),
		$p2 = $('.p2'),
		$p3 = $('.p3'),
		$p4 = $('.p4');
	
	//第一页动画
	var pageOne = function(index){
		$p1.find('div.v-line:odd').animate({'height': '100%'},800);
	    $p1.find('div.h-line:odd').animate({'width': '100%'},800);
	        	
	    $p1.find('div.v-line:even').delay(400).animate({'height': '100%'},1200);
	    $p1.find('div.h-line:even').delay(400).animate({'width': '100%'},1200);
	        	
	    $p1.find('.h-wrap img').delay(1500).animate({'opacity': 1},400);
	        	
	    $p1.find('.arrow-wrap .next').delay(2000).animate({'opacity': 1},400);
	}
	
	//第二页动画
	var pageTwo = function(index){
        	
        //第一部分
        $p2.find('.v-line .line1').animate({'height': '100%'},200);
        $p2.find('.h-line .line5').delay(100).animate({'width': '100%'},200);
        $p2.find('.v-line .line10').delay(200).animate({'height': '100%'},200);
        $p2.find('.h-line .line6').delay(300).animate({'width': '100%'},200);
        $p2.find('.rect-wrap .rect1').delay(400).animate({'opacity': 0.1},200);
        		
        //第二部分
        $p2.find('.v-line .line2').delay(400).animate({'height': '100%'},200);
        $p2.find('.h-line .line1').delay(500).animate({'width': '100%'},200);
        $p2.find('.v-line .line9').delay(600).animate({'height': '100%'},200);
        $p2.find('.h-line .line10').delay(700).animate({'width': '100%'},200);
        $p2.find('.rect-wrap .rect2').delay(800).animate({'opacity': 0.1},200);
        		
        //第三部分
        $p2.find('.v-line .line3').delay(800).animate({'height': '100%'},200);
        $p2.find('.h-line .line4').delay(900).animate({'width': '100%'},200);
        $p2.find('.v-line .line8').delay(1000).animate({'height': '100%'},200);
        $p2.find('.h-line .line7').delay(1100).animate({'width': '100%'},200);
        $p2.find('.rect-wrap .rect3').delay(1200).animate({'opacity': 0.1},200);
        		
        //第四部分
        $p2.find('.v-line .line4').delay(1200).animate({'height': '100%'},200);
        $p2.find('.h-line .line3').delay(1300).animate({'width': '100%'},200);
        $p2.find('.v-line .line7').delay(1400).animate({'height': '100%'},200);
        $p2.find('.h-line .line8').delay(1500).animate({'width': '100%'},200);
        $p2.find('.rect-wrap .rect4').delay(1600).animate({'opacity': 0.1},200);
        		
        		
        //第五部分
        $p2.find('.v-line .line5').delay(1600).animate({'height': '100%'},300);
        $p2.find('.h-line .line2').delay(1700).animate({'width': '100%'},300);
        $p2.find('.v-line .line6').delay(1800).animate({'height': '100%'},300);
        $p2.find('.h-line .line9').delay(1900).animate({'width': '100%'},300);
        $p2.find('.rect-wrap .rect5').delay(2000).animate({'opacity': 0.1},300);
        	
        //第六部分(合字部分)
        $p2.find('.pro-item1 .circle').delay(2000).animate({'opacity': 1},500);
        $p2.find('.pro-item1 .txt').delay(2200).animate({'opacity': 1},300);
        $p2.find('.pro-item1 .line').delay(2400).animate({'width': '100%'},300);
        	
        $p2.find('.pro-item2 .circle').delay(2600).animate({'opacity': 1},500);
        $p2.find('.pro-item2 .txt').delay(2800).animate({'opacity': 1},300);
       	$p2.find('.pro-item2 .line').delay(3000).animate({'width': '100%'},300);
       	
        $p2.find('.pro-item3 .circle').delay(3200).animate({'opacity': 1},500);
        $p2.find('.pro-item3 .txt').delay(3400).animate({'opacity': 1},300);
        $p2.find('.pro-item3 .line').delay(3800).animate({'width': '100%'},300);
        	
        $p2.find('.pro-item4 .circle').delay(4000).animate({'opacity': 1},500);
        $p2.find('.pro-item4 .txt').delay(4200).animate({'opacity': 1},300);
        	
        $p2.find('.project .bg').delay(4600).animate({'opacity': 1},500);
	}
	
	//第三页动画
	var pageThree = function(index){
        	
        //第一部分
        $p3.find('.v-wrap .line:odd').animate({'height': '100%'},800);
        $p3.find('.h-wrap .line:odd').animate({'width': '100%'},800);
        		
        //第二部分
        $p3.find('.v-wrap .line:even').delay(400).animate({'height': '100%'},1200);
        $p3.find('.h-wrap .line:even').delay(400).animate({'width': '100%'},1200);
        		
        //第三部分
        $p3.find('.diamond-wrap .diamond1').delay(1500).animate({'opacity': 1},600);
        $p3.find('.diamond-wrap .diamond2').delay(1800).animate({'opacity': 1},600);
        $p3.find('.diamond-wrap .diamond3').delay(2100).animate({'opacity': 1},600);
        $p3.find('.diamond-wrap .diamond4').delay(2400).animate({'opacity': 1},600);
        $p3.find('.diamond-wrap .diamond5').delay(2700).animate({'opacity': 1},600);
        $p3.find('.diamond-wrap .diamond6').delay(3000).animate({'opacity': 1},600);
	}
	
	//第三页动画
	var pageFour = function(){
        	
        //第一部分
        $p4.find('.v-wrap .line:odd').animate({'height': '100%'},800);
        $p4.find('.h-wrap .line:odd').animate({'width': '100%'},800);
        		
        //第二部分
        $p4.find('.v-wrap .line:even').delay(400).animate({'height': '100%'},1200);
        $p4.find('.h-wrap .line:even').delay(400).animate({'width': '100%'},1200);
        		
        //第三部分
        $p4.find('.btn-wrap .qrCode').delay(1500).animate({'opacity': 1},600);
        $p4.find('.btn-wrap .btn-syb').delay(1800).animate({'opacity': 1},600);
        $p4.find('.btn-wrap .btn-more').delay(2100).animate({'opacity': 1},600);
	}
	
	//设置p3 v-wrap 位置修正
	var setVerticalWrap = function(){
		var winWidth = $(window).width(),
			initWidth = 1920,
			moz = navigator.userAgent.toLowerCase().indexOf('firefox') > -1 ? true : false;
		$('.p3 .h-wrap').css({'left': -(initWidth - winWidth)/1.8});
		
		//竖线框位置不正确，和其他浏览器不一致(仅firefox)
		if(moz){ $('.p3 .v-wrap').css({'top': -480}); }
	}
	
	$(window).resize(function(){
		setVerticalWrap();
	});
	
	//全屏滚动插件初始化
	$('#main').fullpage({
        afterLoad: function(anchorLink, index){
        	switch(index){
        		case 1:
        			pageOne();
        			break;
        		case 2:
        			pageTwo();
        			break;
        		case 3:
        			pageThree();
        			break;
        		case 4:
        			pageFour(index);
        			break;
        		
        		//default
        	}
        },
        afterRender: function(){
        	setVerticalWrap();
        },
	});
	
	//首屏点击跳到下一页
	$('a.next').on('click', function(){
		$.fn.fullpage.moveSectionDown();
	});
	
	//点击出现创业者弹窗
	$('.btn-syb').on('click', function(){
		$('.popup').show();
	});
	
	//点击表单以外区域弹窗消失
	$('.popup .mask').on('click', function(){
		$('.popup').hide();
	});
	
	//我是创业者hover
	$('.btn-syb').hover(
	function(){
		$(this).find('img').attr('src','assets/images/btn-syb-hover.png');
	},
	function(){
		$(this).find('img').attr('src','assets/images/btn-syb.png');
	});
	
	//了解更多hover
	$('.btn-more').hover(
	function(){
		$(this).find('img').attr('src','assets/images/btn-more-hover.png');
	},
	function(){
		$(this).find('img').attr('src','assets/images/btn-more.png');
	});
	
	//获得焦点placeholder消失
	var placeholderText = '';
	$('.popup input, .popup textarea').focus(function(){
		placeholderText = $(this).attr('placeholder');
		$(this).attr('placeholder', '');
	});
	
	//失去焦点placeholder显示
	$('.popup input, .popup textarea').blur(function(){
		$(this).attr('placeholder', placeholderText);
	});
});