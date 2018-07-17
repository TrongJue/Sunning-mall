$(function(){
	jiajian();
	initcheckbox()	
	click();
	love();
	change()

});
function jiajian(){
	$('.add1').click(function(){
		$('.changeNum1').attr('disabled','');
		 var num=$('.changeNum1').val();
		 $('.changeNum1').val(parseInt(num)+1);
		 $('.allprice').html($('.changeNum1').val()*2990+$('.changeNum2').val()*176+$('.changeNum3').val()*219+$('.changeNum4').val()*99+$('.changeNum5').val()*128);
	});
	$('.reduce1').click(function(){
		$('.changeNum1').attr('disabled','');
		 var num=$('.changeNum1').val();
		 if(parseInt(num)>0){
 			$('.changeNum1').val(parseInt(num)-1);
		 }
		 $('.allprice').html($('.changeNum1').val()*2990+$('.changeNum2').val()*176+$('.changeNum3').val()*219+$('.changeNum4').val()*99+$('.changeNum5').val()*128);
	});
	$('.add2').click(function(){
		$('.changeNum2').attr('disabled','');
		 var num=$('.changeNum2').val();
		 $('.changeNum2').val(parseInt(num)+1);
		 $('.allprice').html($('.changeNum1').val()*2990+$('.changeNum2').val()*176+$('.changeNum3').val()*219+$('.changeNum4').val()*99+$('.changeNum5').val()*128);
	});
	$('.reduce2').click(function(){
		$('.changeNum2').attr('disabled','');
		 var num=$('.changeNum2').val();
		 if(parseInt(num)>0){
 			$('.changeNum2').val(parseInt(num)-1);
		 }
		 $('.allprice').html($('.changeNum1').val()*2990+$('.changeNum2').val()*176+$('.changeNum3').val()*219+$('.changeNum4').val()*99+$('.changeNum5').val()*128);
	});
	$('.add3').click(function(){
		$('.changeNum3').attr('disabled','');
		 var num=$('.changeNum3').val();
		 $('.changeNum3').val(parseInt(num)+1);
		 $('.allprice').html($('.changeNum1').val()*2990+$('.changeNum2').val()*176+$('.changeNum3').val()*219+$('.changeNum4').val()*99+$('.changeNum5').val()*128);
	});
	$('.reduce3').click(function(){
		$('.changeNum3').attr('disabled','');
		 var num=$('.changeNum3').val();
		 if(parseInt(num)>0){
 			$('.changeNum3').val(parseInt(num)-1);
		 }
		 $('.allprice').html($('.changeNum1').val()*2990+$('.changeNum2').val()*176+$('.changeNum3').val()*219+$('.changeNum4').val()*99+$('.changeNum5').val()*128);
	});
	$('.add4').click(function(){
		$('.changeNum4').attr('disabled','');
		 var num=$('.changeNum4').val();
		 $('.changeNum4').val(parseInt(num)+1);
		 $('.allprice').html($('.changeNum1').val()*2990+$('.changeNum2').val()*176+$('.changeNum3').val()*219+$('.changeNum4').val()*99+$('.changeNum5').val()*128);
	});
	$('.reduce4').click(function(){
		$('.changeNum4').attr('disabled','');
		 var num=$('.changeNum4').val();
		 if(parseInt(num)>0){
 			$('.changeNum4').val(parseInt(num)-1);
		 }
		 $('.allprice').html($('.changeNum1').val()*2990+$('.changeNum2').val()*176+$('.changeNum3').val()*219+$('.changeNum4').val()*99+$('.changeNum5').val()*128);
	});
	$('.add5').click(function(){
		$('.changeNum5').attr('disabled','');
		 var num=$('.changeNum5').val();
		 $('.changeNum5').val(parseInt(num)+1);
		 $('.allprice').html($('.changeNum1').val()*2990+$('.changeNum2').val()*176+$('.changeNum3').val()*219+$('.changeNum4').val()*99+$('.changeNum5').val()*128);
	});
	$('.reduce5').click(function(){
		$('.changeNum5').attr('disabled','');
		 var num=$('.changeNum5').val();
		 if(parseInt(num)>0){
 			$('.changeNum5').val(parseInt(num)-1);
		 }
		 $('.allprice').html($('.changeNum1').val()*2990+$('.changeNum2').val()*176+$('.changeNum3').val()*219+$('.changeNum4').val()*99+$('.changeNum5').val()*128);
	});
}
function initcheckbox(){
	$('.box1').click(function(){
		$('.box1').toggleClass('select');
	});
	$('.box2').click(function(){
		$('.box2').toggleClass('select');
	});
	$('.box3').click(function(){
		$('.box3').toggleClass('select');
	});
	$('.box4').click(function(){
		$('.box4').toggleClass('select');
	});
	$('.box5').click(function(){
		$('.box5').toggleClass('select');
	});
	$('.boxa').click(function(){
		$('.boxa').toggleClass('select');
		$('.box1').toggleClass('select');
		$('.box2').toggleClass('select');
		$('.box3').toggleClass('select');
	});
	$('.boxb').click(function(){
		$('.boxb').toggleClass('select');
		$('.box4').toggleClass('select');
	});
	$('.boxc').click(function(){
		$('.boxc').toggleClass('select');
		$('.box5').toggleClass('select');
	});
	$('.boxall').click(function(){
		$('.boxall').toggleClass('select');
		$('.boxa').toggleClass('select');
		$('.boxb').toggleClass('select');
		$('.boxc').toggleClass('select');
		$('.box1').toggleClass('select');
		$('.box2').toggleClass('select');
		$('.box3').toggleClass('select');
		$('.box4').toggleClass('select');
		$('.box5').toggleClass('select');
	});
}
function click(){
	$('.del').click(del);
}
//删除
function del(){
	// if(!confirm('是否删除商品?')) return;
	//从表格中删除指定的行

	$(this).parent().parent().parent().parent().remove();
	//提示用户删除成功
	// alert('删除成功');
}
function love(){
	$('.love1').click(function(){
		$('.love1').toggleClass('select1');
	});
	$('.love2').click(function(){
		$('.love2').toggleClass('select1');
	});
	$('.love3').click(function(){
		$('.love3').toggleClass('select1');
	});
	$('.love4').click(function(){
		$('.love4').toggleClass('select1');
	});
	$('.love5').click(function(){
		$('.love5').toggleClass('select1');
	});
}

function change(){
	$('.bj').click(function(){
		$('.rela').toggleClass('repla');
	});
}