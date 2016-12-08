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


    });

    av.router.on('/', function(){
        global.mod = 'index';
    });

    av.router.on('/:id', function(mod){
        global.mod = mod;
        require(['../' + mod, 'css!../../css/' + mod], function(m){
            // m.init && m.init();
            console.log(m);
        })
    });

    av.scan();
});
