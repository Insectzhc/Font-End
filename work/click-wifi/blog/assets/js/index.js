/* 
* @Author: Insect
* @Date:   2016-12-07 14:51:27
* @Last Modified time: 2016-12-07 16:56:30
*/
'use strict';

define(['avalon', 'tool/router.min', 'tool/ajax/ajax.min'], function(av){

    window.global = av.define({
        $id: 'global',
        mod: '',
        init: function(){
        	
        },
		$computed: {
			template: {
				get: function(){
					if(this.mod !== ''){
						return 'assets/tpl/' + this.mod + '.tpl';
					}
				}
			}
		},
		
		//获取列表
		getList: function(url, data){
			var result = {};
			av.post(url, data, function(json){
				result = json;
			});
		}
    });

    av.router.on('/', function(){
        global.mod = 'index'
    })

    av.router.on('/:id', function(mod){
        global.mod = mod
        require(['../' + mod, 'css!../../css/' + mod], function(m){
            m.init && m.init()
        })
    })
    
    av.router.on('/:id/:id', function(mod,menu){
        global.mod = mod
        require(['../' + mod, 'css!../../css/' + mod], function(m){
            m.init && m.init(menu)
        })
    })

    av.scan();
    
    return window.global;
});
