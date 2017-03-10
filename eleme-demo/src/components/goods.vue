<template>
  <div class="goods">
    <div class="menu-wrapper">
    	<ul>
    		<li v-for="good in goods">
    			<span>{{good.name}}</span>
    		</li>
    	</ul>
    </div>
    <div class="foods-wrapper">
    	<ul>
    		<li v-for="good in goods">
    			<h3>{{good.name}}</h3>
    			<ul>
    				<li class="food-item" v-for="food in good.foods">
    					<div class="icon"><img width="57" height="57" v-bind:src="food.icon"/></div>
    					<div class="content">
    						<h4 class="name">{{food.name}}</h4>
    						<p class="desc">{{food.description}}</p>
    						<div class="extra"><span class="count">月售{{food.sellCount}}份</span><span>好评率{{food.rating}}</span></div>
    						<div class="price"><span class="now">￥{{food.price}}</span><span class="old" v-if="food.oldPrice != ''">￥{{food.oldPrice}}</span></div>
    					</div>
    					<v-cart></v-cart>
    				</li>
    			</ul>
    		</li>
    	</ul>
    </div>
    <v-shopCart></v-shopCart>
  </div>
</template>

<script>
import API from '../api';
import cartcontrol from './cartcontrol';
import shopCart from './shopCart';

export default {
  name: 'goods',
  created(){
  	API.getData(d => { this.goods = d.goods; });
  },
  data () {
    return {
      goods: []
    }
  },
  components: {
  	'v-cart': cartcontrol,
  	'v-shopCart': shopCart
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	::-webkit-scrollbar{ width: 0; }
	.goods{ display: -webkit-box; display: -ms-flexbox; display: flex; position: absolute; top: 174px; bottom: 46px; width: 100%; overflow: hidden; }
	.goods .menu-wrapper,.goods .foods-wrapper{ overflow-y: auto; -webkit-overflow-scrolling: touch; }
	.goods .menu-wrapper{ -webkit-box-flex: 0; -ms-flex: 0 0 80px; flex: 0 0 80px; width: 80px; background: #f3f5f7; }
	.goods .foods-wrapper{ -webkit-box-flex: 1; -ms-flex: 1; flex: 1; }
	.goods .menu-wrapper li{ display: table; height: 54px; width: 56px; padding: 0 12px; line-height: 14px; }
	.goods .menu-wrapper li span{ display: table-cell; width: 56px; vertical-align: middle; position: relative; font-size: 12px; }
	.goods .foods-wrapper h3{ padding-left: 14px; height: 26px; line-height: 26px; border-left: 2px solid #d9dde1; font-size: 12px; color: #93999f; background: #f3f5f7; }
	.goods .foods-wrapper .food-item{ display: -webkit-box; display: -ms-flexbox; display: flex; margin: 18px; padding-bottom: 18px; position: relative; }
	.goods .foods-wrapper .food-item .icon{ -webkit-box-flex: 0; -ms-flex: 0 0 57px; flex: 0 0 57px; margin-right: 10px; }
	.goods .foods-wrapper .food-item:after{ display: block; position: absolute; left: 0; bottom: 0; width: 100%; border-top: 1px solid rgba(7,17,27,0.1); content: ' '; -webkit-transform: scaleY(0.5); transform: scaleY(0.5); }
	.goods .foods-wrapper .food-item:last-child:after{ border: none; }
	.goods .foods-wrapper .food-item .name{ margin: 2px 0 8px 0; height: 14px; line-height: 14px; font-size: 14px; color: #07111b; }
	.goods .foods-wrapper .food-item .desc,.goods .foods-wrapper .food-item .extra{ line-height: 10px; font-size: 10px; color: #93999f; }
	.goods .foods-wrapper .food-item .desc{ line-height: 12px; margin-bottom: 8px; }
	.goods .foods-wrapper .food-item .extra .count{ margin-right: 12px; }
	.goods .foods-wrapper .food-item .price{ font-weight: 700; line-height: 24px; }
	.goods .foods-wrapper .food-item .price .now{ margin-right: 8px; font-size: 14px; color: #f01414; }
	.goods .foods-wrapper .food-item .price .old{ text-decoration: line-through; font-size: 10px; color: #93999f; }
</style>
