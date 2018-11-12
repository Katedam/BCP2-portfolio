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
    $('.closebtn').on('click', menuHide);
    $('.social-container a').on('click', navActive);
    $('.project-thumbnail').on('click', openModal);
    $('.close').on('click', closeModal);
});