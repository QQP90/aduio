$(function(){
    $('.tab li').mouseover(function(){
        $(this).addClass('active').siblings().removeClass('active')
        $('.item').eq($(this).index()).addClass('show').siblings().removeClass('show')
        $('.item').eq($(this).index()).removeClass('hide').siblings().addClass('hide')
    })
})