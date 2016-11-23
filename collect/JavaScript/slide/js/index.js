/* 
* @Author: anchen
* @Date:   2016-11-23 18:02:22
* @Last Modified by:   anchen
* @Last Modified time: 2016-11-23 19:48:33
*/
(function(win){
    window.onload = function(){
        var prev = document.getElementById('prev'),
            next = document.getElementById('next'),
            slide = document.getElementById('slide'),
            rotateNum = 0;
            console.log(slide.style);
        prev.onclick = function(){
            rotateNum += 40;
            slide.style.transform = 'translateZ(-288px)'+ 'rotateY(' + rotateNum + 'deg)';
        }
        next.onclick = function(){
            rotateNum -= 40;
            slide.style.transform = 'translateZ(-288px)'+ 'rotateY(' + rotateNum + 'deg)';
        }
    }
})(window || {})