<template>
	<div class="header">
		<div class="seller-info">
			<div class="avatar"><img width="64" height="64" src="http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg"></div>
			<div class="content">
				<div class="title">
			        <span class="brand"></span>
			        <span class="name">粥品香坊（回龙观）</span>
			    </div>
				<p class="desc">蜂鸟专送/38分钟送达</p>
				<p class="support"><span class="icon decrease"></span><span class="text">在线支付满28减5</span></p>
			</div>
			<div class="support-count"><span class="count">5个</span><i class="icon-arrow-right"></i></div>
		</div>
		<div class="bulletin-wrapper">
			<span class="icon-bulletin"></span>
			<span class="bulletin-content">粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深得消费者青睐，发展至今成为粥类的引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。</span>
			<span class="icon-arrow-right"></span>
		</div>
		<div class="background"><img src="http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg" alt="background"></div>
	</div>
</template>

<style>
	.header{ position: relative; overflow: hidden; background: rgba(7,17,27,0.5); color: #fff; }
	.header .seller-info{ position: relative; z-index: 11; padding: 24px 12px 18px 24px; background: rgba(7,17,27,0.4); }
	.header .seller-info .avatar{ display: inline-block; vertical-align: top; }
	.header .seller-info .content{ display: inline-block; margin-left: 16px; }
	.header .seller-info .content .title{ margin: 2px 0 8px 0; }
	.header .seller-info .content .title .name{ margin-left: 6px; font-size: 16px; line-height: 18px; font-weight: bold; }
	.header .seller-info .content .desc{ margin-bottom: 10px; line-height: 12px; font-size: 12px; }
	.header .seller-info .content .support { line-height: 12px; font-size: 10px; }
	.header .seller-info .support-count{ position: absolute; right: 12px; bottom: 14px; padding: 0 8px; height: 24px; line-height: 24px; border-radius: 14px; background: rgba(0,0,0,0.2); text-align: center; }
	.header .seller-info .support-count .count{ vertical-align: top; font-size: 10px; }
	.header .background{ position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 10; -webkit-filter: blur(10px); filter: blur(10px); }
	.header .background img{ width: 100%; height: 100%; }
	.header .bulletin-wrapper{ position: relative; z-index: 11; height: 28px; line-height: 28px; padding: 0 22px 0 12px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; background: rgba(7,17,27,0.5); }
	.header .bulletin-wrapper .bulletin-content{ vertical-align: top; margin: 0 4px; font-size: 10px; }
	
</style>