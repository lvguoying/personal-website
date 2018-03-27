/**
 * Created by Administrator on 2018/3/27 0027.
 */
$(document).ready(function () {

    $('.tab-ab').click(function () {
        $('about').css('display','none')
    })
    $('.tab-pr').click(function () {
        $('.portfolio').slideDown("3000");
        $('.about').css('display','none');
        $('.blog').css('display','none');

    })
    $('.tab-bl').click(function () {
        $('.blog').slideDown("show");
        $('.about').css('display','none');
        $('.portfolio').css('display','none');




        console.log( $('.tab-about'));
    })
})