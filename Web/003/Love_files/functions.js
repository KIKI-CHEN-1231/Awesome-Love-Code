/*
 * http://love.hackerzhou.me
 */

// variables
var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).resize(function() {
    var newWidth = $win.width();
    var newHeight = $win.height();
    if (newWidth != clientWidth && newHeight != clientHeight) {
        location.replace(location);
    }
});

(function($) {
	$.fn.typewriter = function() {
		this.each(function() {
			var $ele = $(this), str = $ele.html(), progress = 0;
			$ele.html('');
			var timer = setInterval(function() {
				var current = str.substr(progress, 1);
				if (current == '<') {
					progress = str.indexOf('>', progress) + 1;
				} else {
					progress++;
				}
				$ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
				if (progress >= str.length) {
					clearInterval(timer);
				}
			}, 75);
		});
		return this;
	};
})(jQuery);

function timeElapse(date) {  
    // 确保date是Date对象  
    if (!(date instanceof Date)) {  
        date = new Date(date);  
    }  
  
    var current = new Date();  
    var diff = current - date;  
    var seconds = Math.floor(diff / 1000);  
    var days = Math.floor(seconds / (3600 * 24));  
    seconds -= days * 3600 * 24;  
    var hours = Math.floor(seconds / 3600);  
    seconds -= hours * 3600;  
    var minutes = Math.floor(seconds / 60);  
    seconds -= minutes * 60;  
  
    // 格式化时间单位  
    hours = hours < 10 ? "0" + hours : hours;  
    minutes = minutes < 10 ? "0" + minutes : minutes;  
    seconds = seconds < 10 ? "0" + seconds : seconds;  
  
    // 构建结果字符串  
    var result = "第 <span class=\"digit\">" + days + "</span> 天 <span class=\"digit\">" + hours + "</span> 小时 <span class=\"digit\">" + minutes + "</span> 分钟 <span class=\"digit\">" + seconds + "</span> 秒";  
  
    // 如果页面中有id为clock的元素，则更新其内容  
    if (document.getElementById('clock')) {  
        document.getElementById('clock').innerHTML = result;  
    }  
}
