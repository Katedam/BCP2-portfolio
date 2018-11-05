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

// var arrow = "down";
// function toggleMoreInfo(event) {
//     const $arrow = $('.arrow');
//     $(this).siblings('.more-info').slideToggle();
//     if (arrow == "down") {
//         $arrow.css('transform', 'rotate(-135deg)');
//         arrow = "up";
//     } else if (arrow == "up") {
//         $arrow.css('transform', 'rotate(45deg)')
//         arrow = "down";
//     } 
// }

function openModal() {
    $('#modal-container').css('display', 'block');
    const $projectList = $('.my-portfolio');
    const id = $(this).data("project-id");
    $(`#${id}`).fadeIn();
}

function closeModal() {
    $('#modal-container').css('display', 'none');
    $('.my-portfolio').hide();
}

// function showSlides(index) {
//     const $slides = $('.my-portfolio');
//     if (index > $slides.length) {
//         slideIndex = 1;
//     };
//     if (index < 1) {
//         slideIndex = $slides.length;
//     };
//     $slides.each(function(){
//         $slides.css('display', 'none');
//     });
//     const $slideIndex = $(this);
//     $slideIndex.show();
// }

$(document).ready(function() {
    $('.icon-menu').on('click', menuShow);
    $('.closebtn').on('click', menuHide);
    $('.social-container a').on('click', navActive);
    $('.nav-menu').on('click', 'li', showPortfolio);
    $('.project-thumbnail').on('click', openModal);
    $('.close').on('click', closeModal);
    // $('.arrow').on('click', toggleMoreInfo);
    hideSections();
});