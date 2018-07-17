$(function(){
	$(window).scroll(function() {
        var scrollHeight = $(document).scrollTop();
        if (scrollHeight > 5 ) {
            $(".top").css('background-color','orange');
        }else if(scrollHeight < 5 ){
        	$(".top").css('background-color','transparent');
        }
    });

    $('.am-slider-2').flexslider({
      // 操作时要不要停止自动轮播
      pauseOnAction:true,
      // 停止轮播后眼不要恢复
      slideshow:true,//是否自动播放 
      directionNav:false,//是否有上一个，下一个 
      controlNav:false,//是否创建小圈圈
      direction:"vertical",//切换方向
      animationLoop: true,//是否循环播放
      animation:'slide',//设置切换动画的fade|slide
      slideshowSpeed:2000, 
      touch: true,
    });
});

