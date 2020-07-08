$(function () {
    
    //回到顶部
    $(".gototop").click(function(){
		$('body,html').animate({scrollTop:0},500);
	});
    
    //微信二维码
    $(".wechat").each(function(){
		$(this).hover (function(){
			$("#qrcode").stop(true,true).fadeIn();
		},function(){
			$("#qrcode").stop(true,true).fadeOut();
		});
	});
	var qrcode = new QRCode(document.getElementById("qrcode"), {
		text: location.href,
		width : 100,
		height : 100,
		correctLevel : QRCode.CorrectLevel.L
	});
    
    //微博分享
    $(".weibo").on('click', function() {
		var shareUrl = location.href;
		var summary = $("*[name='Description']").attr("content");
		var pic = $(".art_content").find('img').eq(0).attr('src');
		var openUrl = 'http://service.weibo.com/share/share.php?url=' + shareUrl + '&title=' + encodeURIComponent(summary) + '&pic='+pic;
		window.open(openUrl,"","height=600,width=800,top=100,left=100,screenX=100,screenY=100,scrollbars=yes,resizable=yes");
	});
    
    //点赞和取消
    $(".likebutton").click(function(){
        if($(this).hasClass("dislike")){
            $(this).removeClass("dislike");
            $(this).html(parseInt($(this).html())+1);
        }else{
            $(this).addClass("dislike");
            $(this).html(parseInt($(this).html())-1);
        }
	});
    
    //选项卡
    $(".tabnav").children().mouseover(function(){
        if(!$(this).hasClass("current")){
            $(this).siblings().removeClass();
            $(this).parents('.tab').find('.tabsingle').hide();
            $(this).addClass("current");
            $(this).parents('.tab').find('.tabsingle').eq($(this).index()).fadeIn();
        }
	});
    
    //音频播放器
    audiojs.events.ready(function() {
        audiojs.createAll();
    });
	
});