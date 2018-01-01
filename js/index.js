$(function () {
    // 设置banner的高度为满屏
    $('.banner').height($(window).height());
    $(window).on('resize',function () {
        $('.banner').height($(window).height());
    })

    // 跟随滚动设置菜单
    $(window).scroll(function(){
        if(($('header.fixed').length>0)){
            if(($(this).scrollTop() > 0)&&($(window).width()>767)){
                $('header').addClass('on')
            }else{
                $('header').removeClass('on')
            }
        }
    })
    // 滚动监听
    $('body').scrollspy({
        target:'.scrollspy',
        offset:70
    })
    // 锚点动画跳转
    $('header a').on('click',function (e) {
        e.preventDefault();
        $('html,body').animate({scrollTop:$($(this).attr('href')).offset().top-60},500)
    })

    $('#postForm form').submit(function () {
        $('#postForm form').find('#name').triggerHandler('blur')
        $('#postForm form').find('#mail').triggerHandler('blur')
        $('#postForm form').find('#comment').triggerHandler('blur')
        $.ajax({
            url:'index1.js',
            type:'post',
            dataType:'html',
            data:$('#postForm form').serialize(),
            success:function (data) {
                alert('感谢您的建议！')
            }
        })
    })
})