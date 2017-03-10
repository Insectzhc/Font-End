<template>
	<div class="shopcart">
	  <div class="content">
	    <div class="content-left">
	      <div class="logo-wrapper">
	        <div class="logo">
	          <i class="icon-shopping-cart"></i>
	        </div>
	        <div class="num">0</div>
	      </div>
	      <div class="price">￥0</div>
	      <div class="desc">另需配送费￥4元</div>
	    </div>
	    <div class="content-right">
	      <div class="pay not-enough"> ￥20元起送 </div>
	    </div>
	  </div>
	  <!--<div class="ball-container">
	    <div class="ball drop-transition">
	      <div class="inner inner-hook"></div>
	    </div><div class="ball drop-transition">
	      <div class="inner inner-hook"></div>
	    </div><div class="ball drop-transition">
	      <div class="inner inner-hook"></div>
	    </div><div class="ball drop-transition">
	      <div class="inner inner-hook"></div>
	    </div><div class="ball drop-transition">
	      <div class="inner inner-hook"></div>
	    </div>
	  </div>
	  <div class="shopcart-list fold-transition">
	    <div class="list-header">
	      <h1 class="title">购物车</h1>
	      <span class="empty">清空</span>
	    </div>
	    <div class="list-content">
	      <ul>
	        
	      </ul>
	    </div>
	  </div>-->
	</div>
</template>

<script>
	export default{
		
	}
</script>

<style>
	.shopcart{ position: fixed; left: 0; bottom: 0; z-index: 50; width: 100%; height: 48px; }
	.shopcart .content{ display: -webkit-box; display: -ms-flexbox; display: flex; background: #141d27; font-size: 0; color: rgba(255,255,255,0.4); }
	.shopcart .content .content-left{ -webkit-box-flex: 1; -ms-flex: 1; flex: 1; }
	.shopcart .content .content-right{ -webkit-box-flex: 0; -ms-flex: 0 0 105px; flex: 0 0 105px; width: 105px; }
	.shopcart .content .content-left .logo-wrapper{ display: inline-block; vertical-align: top; position: relative; top: -10px; margin: 0 12px; padding: 6px; width: 56px; height: 56px; box-sizing: border-box; border-radius: 50%; background: #141d27; }
	.shopcart .content .content-left .price{ display: inline-block; vertical-align: top; margin-top: 12px; line-height: 24px; padding-right: 12px; box-sizing: border-box; border-right: 1px solid rgba(255,255,255,0.1); font-size: 16px; font-weight: 700; }
	.shopcart .content .content-left .desc{ display: inline-block; vertical-align: top; margin: 12px 0 0 12px; line-height: 24px; font-size: 10px; }
	.shopcart .content .content-right .pay{ height: 48px; line-height: 48px; text-align: center; font-size: 12px; font-weight: 700; }
	.shopcart .content .content-right .pay.not-enough{ background: #2b333b; }
</style>
