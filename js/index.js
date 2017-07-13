(function(global){
    function remChange(){
        document.documentElement.style.fontSize=20*document.documentElement.clientWidth/750+'px';
    }
    remChange();
    global.addEventListener('resize',remChange,false);
})(window);

$(function () {
    //分享按钮
    $('#btn1').on('click',function () {
        window.location.href = '';
    });
    //立即办理按钮
    $('#btn2').on('click',function () {
        $('.tc').fadeIn();
        showMask();
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

    //隐藏手机号中间4位
    (function () {
        var $number = $('#phoneNum').find('li').find('span:nth-child(2)');
        var mtel = $number.html().substr(0, 3) + '****' + $number.html().substr(-4);
        $number.text(mtel);
    })();

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
