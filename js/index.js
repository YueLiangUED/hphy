(function(global){
    function remChange(){
        document.documentElement.style.fontSize=20*document.documentElement.clientWidth/750+'px';
    }
    remChange();
    global.addEventListener('resize',remChange,false);
})(window);

$(function () {
    //分享按钮
    $('#btn2').on('click',function () {
        window.location.href = 'http://service.bj.10086.cn/m/activity/manager/showIndex.action?activityName=wxkdzq&channelName=app&source=app&mm=tjyl';
    });
    //立即办理按钮
    $('#btn1').on('click',function () {
        //$('.tc').fadeIn();
        //showMask();
        $('#main').hide();
        $('.box').show();
    });
    //我要分享按钮
    $('#btn3').on('click',function () {

    });
    $('#mask').on('click',function () {
        $('.tc').fadeOut();
        hideMask();
    });
    $('.tc').on('click',function () {
        $('.tc').fadeOut();
        hideMask();
    });
    //邀请的好友列表
    $('.list').show();

    //显示遮罩层
    function showMask(){
        $("#mask").css("height",$(document).height());
        $("#mask").css("width",$(document).width());
        $("#mask").show();
    }
    //隐藏遮罩层
    function hideMask(){
        $("#mask").hide();
    }

});
