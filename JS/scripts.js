'use strict';

function hideSections() {
    $('.social-links').hide();
    $('#portfolio').hide();
}

function menuShow() {
    if($('.nav-menu').css('width', '0')) {
        $('.nav-menu').css('width', '100vw');
    } else {
        $('.nav-menu').css('width', '0')
    }    
}

function menuHide() {
    $('.nav-menu').css('width', '0');
}

function navActive(event) {
    $('.social-links').each(function(index){
        $(this).delay(1000 * index).fadeIn();
    });
    $('.social-links').on('click', function() {
        $(this).fadeOut(700);
    });
    event.stopPropagation();
}

function showPortfolio() {
    if ($(this).data('content', 'portfolio')) {
        $('#portfolio').show();
        $('.more-info').hide();
        $('.nav-menu').hide();
    }
}

function showMoreInfo() {
    const $arrow = $('.arrow');
    if ($arrow.css('transform', 'rotate(45deg)')) {
        console.log('in the if');
        $('.more-info').slideDown();
        $arrow.css('transform', 'rotate(-135deg)');
        $arrow.on('click', function() {
            console.log('in the function');
            $arrow.css('transform', 'rotate(45deg)');
            $('.more-info').slideUp(); 
        });    
    } 
}

$(document).ready(function() {
    $('.icon-menu').on('click', menuShow);
    $('.closebtn').on('click', menuHide);
    $('.social-container a').on('click', navActive);
    // $('.nav-menu').on('mouseleave', 'li', navReset);
    $('.nav-menu').on('click', 'li', showPortfolio);
    $('.arrow').on('click', showMoreInfo);
    hideSections();
});