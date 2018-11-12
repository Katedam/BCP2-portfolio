'use strict';

function initIndexPage() {
    $('.social-links').hide();
    $('#portfolio').hide();
    $('.hello-img').css('width', '25%');
    $('.header-img').css('opacity', '1');
}

function menuShow() {
    if($('.nav-menu').css('width', '0')) {
        $('.nav-menu').css('width', '100vw');
        $('.nav-menu ul a').css('display', 'block');
        $('.nav-menu').addClass('nav-color-change');
        $('.menu-arrow').hide();
        $('.closebtn').show();
    } else {
        $('.nav-menu').css('width', '0')
    }    
}

function menuHide() {
    const $nav = $('.nav-menu');
    if ($(window).width() < 800)  {
        $nav.css('width', '0'); 
    } else {
        $nav.css('width', '10%');
        $($nav, 'a').hide();
        $nav.removeClass("nav-color-change");
        $('.menu-arrow').show();
    }
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

function showSection() {
    if ($(this).data().content == 'portfolio') {
        $('#portfolio').show();
        $('.nav-menu').css('width', '0');
        $('.icon-menu').on('click', menuShow);
    } else {
        initIndexPage();
        menuHide();
    }
}

function openModal() {
    $('#modal-container').css('display', 'block');
    const $projectList = $('.my-portfolio');
    $projectList.hide();
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
    $('#menu-arrow').on('click', menuShow);
    $('.closebtn').on('click', menuHide);
    $('.social-container a').on('click', navActive);
    $('.project-thumbnail').on('click', openModal);
    $('.close').on('click', closeModal);
});