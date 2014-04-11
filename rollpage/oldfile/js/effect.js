$(document).ready(function(){
	$("#main_bd").draggable({axis:"x"});
	
	$(".profile").draggable({drag:function(){}});
	$(".profile").mouseover(function(){$(this).css("opacity","0.9");});
	$(".profile").mouseout(function(){$(this).css("opacity","0.3");});
	$(".profile").mousedown(function(){
		$(".profile").not(this).each(function(){$(this).css("z-index","50");});
		$(this).css("z-index","100");
		});
	$(".item").click(function(){
		$(this).parent().animate({height:"400px"},1200);
		$(this).parent().find("#shop").show(2000);
		});
	$(".close").click(function(){
		$(this).parent().animate({height:"50px"},1200);
		$(this).parent().find("#shop").hide(2000);
		});
	
});
