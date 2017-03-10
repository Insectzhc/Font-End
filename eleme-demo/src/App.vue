<template>
	  <div id="app">
	  		<v-header></v-header>
	  		<div class="tab">
	  				<div class="item">
	  						<router-link to="/goods" v-bind:class="">商品</router-link>
	  				</div>
	  				<div class="item">
	  						<router-link to="/ratings" v-bind:class="">评论</router-link>
	  				</div>
	  				<div class="item">
	  						<router-link to="/seller" v-bind:class="">商家</router-link>
	  				</div>
	  		</div>
	    	<router-view></router-view>
	  </div>
</template>

<script>
import header from './components/header';

export default {
  components: {
  	'v-header': header
  }
}
</script>

<style>
/*重设浏览器样式*/
a, body, div,
header, html, img,
p, span, ul{ border: none; margin: 0;padding: 0; border: 0;outline:0; -webkit-text-size-adjust: none; -webkit-tap-highlight-color: rgba(0,0,0,0); }

html, body{ height: 100%; font-family: 'PingFang SC', 'STHeitiSC-Light', 'Helvetica-Light', arial, sans-serif; color: #4f5050; background: #fff; }

.tab{ display: -webkit-box; display: -ms-flexbox; display: flex; width: 100%; height: 40px; line-height: 40px; position: relative; }
.tab:after{ display: block; position: absolute; left: 0; bottom: 0; width: 100%; border-top: 1px solid rgba(7,17,27,0.1); content: ' '; }
.tab .item{ -webkit-box-flex: 1; -ms-flex: 1; flex: 1; text-align: center; }
.tab .item > a{ display: block; font-size: 14px; color: #4d555d; }
.tab .item > a.active{ color: #f01414; }
</style>
