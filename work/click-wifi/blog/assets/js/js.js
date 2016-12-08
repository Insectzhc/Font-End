/* 
* @Author: Insect
* @Date:   2016-12-07 16:13:21
* @Last Modified time: 2016-12-07 16:40:28
*/
'use strict';

define(['avalon', 'tool/ajax/ajax.min', 'tool/pages/pages.min'], function(av){
    var js = av.define({
        $id: 'js',
        init: function(menu){
            Mem.menu = menu || 'list'
        },
    });
})