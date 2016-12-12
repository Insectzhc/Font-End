/* 
* @Author: Insect
* @Date:   2016-12-07 16:13:21
* @Last Modified time: 2016-12-07 16:40:28
*/
'use strict';

define(['avalon', 'tool/ajax/ajax.min', 'tool/pages/pages.min'], function(av){
    var front = av.define({
        $id: 'front',
        menu: '',
        init: function(menu){
        	this.menu = menu || 'js';
        },
        $computed: {
        	template: {
				get: function(){
					if(this.menu !== ''){
						return 'assets/tpl/front/' + this.menu + '.tpl';
					}
				}
			},
			listData: {
				get: function(){
					if(this.menu === 'html'){
						return [{name: 'html'}];
					}
					if(this.menu === 'css'){
						return [{name: 'css'}];
					}
					if(this.menu === 'js'){
						return [{name: 'js'}];
					}
				}
			}
        }
    });
    av.scan();
    return front;
})