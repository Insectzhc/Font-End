/* 
* @Author: anchen
* @Date:   2016-11-25 17:36:54
* @Last Modified by:   anchen
* @Last Modified time: 2016-11-25 17:37:20
*/
(function (doc, win) {
		var docEl = doc.documentElement,
		resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
		recalc = function () {
				var clientWidth = docEl.clientWidth,
						clientHeight = docEl.clientHeight,
						designWidth = 640,
						designHeight = 1136;
				if (!clientWidth) return;
				docEl.style.fontSize = 100 * (clientWidth / 640) * clientHeight / (designHeight * clientWidth / designWidth)  + 'px';
		};
		if (!doc.addEventListener) return;
		win.addEventListener(resizeEvt, recalc, false);
		doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);