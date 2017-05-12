/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-05-03 17:59:45
 * @version $Id$
 */
 $(function(){
	function resize (){
			// 获取屏幕宽度
		var windowWidth = $(window).width();
			// 判断屏幕大小
		var isSmallScreen = windowWidth<768;
			// 遍历容器
		$('#main_ad > .carousel-inner > .item').each( function(i,item){
			var $item = $(item);
			var imgSrc = $item.data(isSmallScreen?'image-xs':'image-lg');

			$item.css('backgroundImage','url("'+imgSrc+'")');


			if(isSmallScreen){
				$item.html('<img src="'+imgSrc+'" alt="">');
				
			}else {
				$item.empty();
			}
		});

		
		//选项卡滚动条，放在resize()里，是窗口大小以改变就变化
	var $ulControl =$('.nav-tabs'); 
	var width=30;//初始值定为30，是因为ulpadding-left有20
	$ulControl.children().each(function(index,element){
		
		width += element.clientWidth;
	});
// 判断ul宽是否超出屏幕，超出就出现横向滚动条
	if(width>$(window).width()){
		$ulControl
			.css('width',width)
			.parent().css('overflow-x','scroll');

	}
	}

	$(window).on('resize',resize).trigger('resize');

	//工具提示初始化
	$('[data-toggle="tooltip"]').tooltip();

	
	//模态框调整

 $('#myModal').modal({
 	show: false,
 	keyboard : false ,
 	backdrop: 'static',
 });

	// 轮播图手机端
	var $carousels= $('.carousel');
	// 将获取到的位置信息，存到变量里
	var startX,endX;
	var offset=40;
	// 获取触摸屏时位置
	$carousels.on('touchstart',function(e){
		//console.log(e);
		//console.log(e.originalEvent.touches[0].clientX);
		startX = e.originalEvent.touches[0].clientX;
	});
	// 记录触摸结束时位置，不能放在end后比较，那时候数据已经没有
	$carousels.on('touchmove',function(e){
		//console.log(e.originalEvent.touches[0].clientX);
		endX = e.originalEvent.touches[0].clientX;
	});

	// 触摸结束后比较两次位置大小确定方向
	$carousels.on('touchend',function(e){
		// 当触屏前后值大于一定值时才执行，避免太灵敏
		var distance = Math.abs(startX-endX);
		//console.log(startX>endX?'y':'z');
		if(distance>offset){


			$(this).carousel(startX>endX?'next':'prev');
		}
	});
});