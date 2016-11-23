Zepto(document).ready(function(){
	
	var $p1 = $('.p1'),
		$p2 = $('.p2'),
		$p3 = $('.p3'),
		$p4 = $('.p4');
	
	//第一页动画
	var pageOne = function(){
		//第一部分
	    $p1.find('.v-wrap .line').each(function(index){
	    	if((index+1)%2 == 1){
	    		//odd
	    		$(this).css({'height': '100%', 'transition-duration': '0.8s'});
	    	}else{
	    		//even
	    		$(this).css({'height': '100%', 'transition-duration': '0.8s', 'transition-delay': '0.5s'});
	    	}
	    });
	    
	    //第二部分
	    $p1.find('.h-wrap .line').each(function(index){
	    	if((index+1)%2 == 1){
	    		//odd
	    		$(this).css({'width': '100%', 'transition-duration': '0.6s'});
	    	}else{
	    		//even
	    		$(this).css({'width': '100%', 'transition-duration': '0.6s', 'transition-delay': '0.5s'});
	    	}
	    });
	    $p1.find('.logo').css({'opacity': 1, 'transition-duration': '0.4s', 'transition-delay': '1.1s'});
	    $p1.find('.btn-next').css({'opacity': 1, 'transition-duration': '0.4s', 'transition-delay': '1.4s'});
	}
	
	//第二页动画
	var pageTwo = function(){
		//第一部分
        $p2.find('.v-line .line1').css({'height': '100%', 'transition-duration': '0.3s'});
        $p2.find('.h-line .line3').css({'width': '100%', 'transition-duration': '0.3s', 'transition-delay': '0.1s'});
        $p2.find('.v-line .line6').css({'height': '100%', 'transition-duration': '0.3s', 'transition-delay': '0.2s'});
        $p2.find('.h-line .line4').css({'width': '100%', 'transition-duration': '0.3s', 'transition-delay': '0.3s'});
        $p2.find('.rect-wrap .rect1').css({'opacity': '1', 'transition-duration': '0.3s', 'transition-delay': '0.4s'});
        
        //第二部分
        $p2.find('.v-line .line2').css({'height': '100%', 'transition-duration': '0.3s', 'transition-delay': '0.4s'});
        $p2.find('.h-line .line2').css({'width': '100%', 'transition-duration': '0.3s', 'transition-delay': '0.5s'});
        $p2.find('.v-line .line5').css({'height': '100%', 'transition-duration': '0.3s', 'transition-delay': '0.6s'});
        $p2.find('.h-line .line5').css({'width': '100%', 'transition-duration': '0.3s', 'transition-delay': '0.7s'});
        $p2.find('.rect-wrap .rect2').css({'opacity': '1', 'transition-duration': '0.3s', 'transition-delay': '0.8s'});
        
        //第三部分
        $p2.find('.v-line .line3').css({'height': '100%', 'transition-duration': '0.3s', 'transition-delay': '0.8s'});
        $p2.find('.h-line .line1').css({'width': '100%', 'transition-duration': '0.3s', 'transition-delay': '0.9s'});
        $p2.find('.v-line .line4').css({'height': '100%', 'transition-duration': '0.3s', 'transition-delay': '1s'});
        $p2.find('.h-line .line6').css({'width': '100%', 'transition-duration': '0.3s', 'transition-delay': '1.1s'});
        $p2.find('.rect-wrap .rect3').css({'opacity': '1', 'transition-duration': '0.3s', 'transition-delay': '1.2s'});
        
        //第四部分(合字部分)
        $p2.find('.item1 .circle').css({'opacity': '1', 'transition-duration': '0.5s', 'transition-delay': '1.2s'});
        $p2.find('.item1 .txt').css({'opacity': '1', 'transition-duration': '0.3s', 'transition-delay': '1.4s'});
        $p2.find('.item1 .line').css({'width': '100%', 'transition-duration': '0.3s', 'transition-delay': '1.6s'});
        
        $p2.find('.item2 .circle').css({'opacity': '1', 'transition-duration': '0.5s', 'transition-delay': '1.8s'});
        $p2.find('.item2 .txt').css({'opacity': '1', 'transition-duration': '0.3s', 'transition-delay': '2s'});
        $p2.find('.item2 .line').css({'width': '100%', 'transition-duration': '0.3s', 'transition-delay': '2.2s'});
        
        $p2.find('.item3 .circle').css({'opacity': '1', 'transition-duration': '0.5s', 'transition-delay': '2.4s'});
        $p2.find('.item3 .txt').css({'opacity': '1', 'transition-duration': '0.3s', 'transition-delay': '2.6s'});
        $p2.find('.item3 .line').css({'width': '100%', 'transition-duration': '0.3s', 'transition-delay': '2.8s'});
        
        $p2.find('.item4 .circle').css({'opacity': '1', 'transition-duration': '0.5s', 'transition-delay': '3s'});
        $p2.find('.item4 .txt').css({'opacity': '1', 'transition-duration': '0.3s', 'transition-delay': '3.2s'});
        
        $p2.find('.project .bg').css({'opacity': '1', 'transition-duration': '0.5s', 'transition-delay': '3.6s'});
	}
	
	//第三页
	var pageThree = function(){
		//第一部分
		$p3.find('.v-wrap .line').each(function(index){
	    	if((index+1)%2 == 1){
	    		//odd
	    		$(this).css({'height': '100%', 'transition-duration': '0.6s'});
	    	}else{
	    		//even
	    		$(this).css({'height': '100%', 'transition-duration': '0.6s', 'transition-delay': '0.5s'});
	    	}
	    });
	    
	    //第二部分
	    $p3.find('.h-wrap .line').each(function(index){
	    	if((index+1)%2 == 1){
	    		//odd
	    		$(this).css({'width': '100%', 'transition-duration': '0.6s'});
	    	}else{
	    		//even
	    		$(this).css({'width': '100%', 'transition-duration': '0.6s', 'transition-delay': '0.5s'});
	    	}
	    });
		
        //第三部分
        $p3.find('.diamond-wrap .diamond1').css({'opacity': '1', 'transition-duration': '0.6s', 'transition-delay': '1s'});
        $p3.find('.diamond-wrap .diamond2').css({'opacity': '1', 'transition-duration': '0.6s', 'transition-delay': '1.3s'});
        $p3.find('.diamond-wrap .diamond3').css({'opacity': '1', 'transition-duration': '0.6s', 'transition-delay': '1.6s'});
        $p3.find('.diamond-wrap .diamond4').css({'opacity': '1', 'transition-duration': '0.6s', 'transition-delay': '1.9s'});
        $p3.find('.diamond-wrap .diamond5').css({'opacity': '1', 'transition-duration': '0.6s', 'transition-delay': '2.2s'});
        $p3.find('.diamond-wrap .diamond6').css({'opacity': '1', 'transition-duration': '0.6s', 'transition-delay': '2.5s'});
	}
	
	//第四页
	var pageFour = function(){
		
		//第一部分
		$p4.find('.v-wrap .line').each(function(index){
	    	if((index+1)%2 == 1){
	    		//odd
	    		$(this).css({'height': '100%', 'transition-duration': '0.6s'});
	    	}else{
	    		//even
	    		$(this).css({'height': '100%', 'transition-duration': '0.6s', 'transition-delay': '0.5s'});
	    	}
	    });
	    
	    //第二部分
	    $p4.find('.h-wrap .line').each(function(index){
	    	if((index+1)%2 == 1){
	    		//odd
	    		$(this).css({'width': '100%', 'transition-duration': '0.6s'});
	    	}else{
	    		//even
	    		$(this).css({'width': '100%', 'transition-duration': '0.6s', 'transition-delay': '0.5s'});
	    	}
	    });
	    
        //第三部分
        $p4.find('.btn-wrap .qrCode').css({'opacity': '1', 'transition-duration': '0.6s', 'transition-delay': '1s'});
        $p4.find('.btn-wrap .btn-syb').css({'opacity': '1', 'transition-duration': '0.6s', 'transition-delay': '1.3s'});
        $p4.find('.btn-wrap .btn-more').css({'opacity': '1', 'transition-duration': '0.6s', 'transition-delay': '1.6s'});
	}
	
	//全屏滑动组件初始化
	var swiper = new Swiper('.swiper-container', {
		pagination: '.swiper-pagination',
		paginationClickable: true,
		direction: 'vertical',
		onSlideChangeEnd: function(swiper){
			//切换完成后执行
		   	switch(swiper.activeIndex){
		   		case 0:
		   			pageOne();
		   			break;
		   		case 1:
		   			pageTwo();
		   			break;
		   		case 2:
		   			pageThree();
		   			break;
		   		case 3:
		   			pageFour();
		   			break;
		   		//default
		   	}
		},
		onInit: function(swiper){
	      //Swiper初始化完成
	      pageOne();
	    }
	});
	
	//首屏点击箭头跳到第二页
	$('.p1 .btn-next').bind('tap',function(){
		swiper.slideNext();
	});
	
	//我是创业者
	$('.p4 .btn-syb').bind('tap',function(){
		$('.p4 .popup').show();
	});
	
	//隐藏弹窗
	$('.p4 .popup .mask').bind('tap',function(){
		$('.p4 .popup').hide();
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
