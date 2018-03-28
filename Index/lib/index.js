/**
 * Created by Administrator on 2018/3/27 0027.
 */
$(document).ready(function () {



    $('.tab-ab').click(function () {
        $('.tabs li').removeClass('active');
        $(this).addClass('active');
        $('#about').slideDown('slow');
        $('#portfolio').css('display','none');
        $('#blog').css('display','none');
    });
    $('.tab-pr').click(function () {
        $('.tabs li').removeClass('active');
        $(this).addClass('active');
        $('.tab-pr').addClass('active');
        $('#portfolio').slideDown('slow');
        $('#about').css('display','none');
        $('#blog').css('display','none');
    });
    $('.tab-bl').click(function () {
        $('.tabs li').removeClass('active');
        $(this).addClass('active');
        $('.tab-bl').addClass('active');
        $('#blog').slideDown('slow');
        $('#about').css('display','none');
        $('#portfolio').css('display','none');
    })

    $('.tab-co').click(function () {
        $('.tabs li').removeClass('active');
        $(this).addClass('active');
    });

    $('.portfolio li').hover( function(){
        $(this).children('img').animate({ opacity: 0.55 }, 'fast');
    }, function(){
        $(this).children('img').animate({ opacity: 1 }, 'slow');
    });



    var $portfolioClone = $('.portfolio').clone();

    $('.filter a').click(function(e){
        $('.filter li').removeClass('current');
        var $filterClass = $(this).parent().attr('class');
        if ( $filterClass == 'all' ) {
            var $filteredPortfolio = $portfolioClone.find('li');
        } else {
            var $filteredPortfolio = $portfolioClone.find('li[data-type~=' + $filterClass + ']');
        }
        $('.portfolio').quicksand( $filteredPortfolio, {
            duration: 800,
            easing: 'easeInOutQuad'
        }, function(){
            $('.portfolio li').hover( function(){
                $(this).children('img').animate({ opacity: 0.55 }, 'fast');
            }, function(){
                $(this).children('img').animate({ opacity: 1 }, 'slow');
            });

    $('.portfolio li').hover( function(){
        $(this).children('img').animate({ opacity: 0.55 }, 'fast');
    }, function(){
        $(this).children('img').animate({ opacity: 1 }, 'slow');
    });
        });


        $(this).parent().addClass('current');
        e.preventDefault();
    });






    $('.btnMore').click(function() {
        $(this).parent('.blogPost').find('.read-more').toggle();
        return false;
    });



});