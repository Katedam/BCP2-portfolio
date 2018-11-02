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
function closeModal() {
    $('#modal-container').css('display', 'none');
}

function openModal() {
    $('#modal-container').css('display', 'block');
    showSlides(1);
}

// function moveSlides(index) {
//     showSlides(slideIndex )
// }

function currentSlide(index) {
    showSlides($slideIndex = index);
}

function showSlides(index) {
    const $slides = $('.my-portfolio');
    console.log($slides);
    var id = $slides[index].id;
    console.log(id);
    if (index > $slides.length) {
        slideIndex = 1;
    };
    if (index < 1) {
        slideIndex = $slides.length;
    };
    $slides.each(function(){
        $slides.css('display', 'none');
    });
    $('#' + id).show();
}

$(document).ready(function() {
    $('.icon-menu').on('click', menuShow);
    $('.closebtn').on('click', menuHide);
    $('.social-container a').on('click', navActive);
    $('.nav-menu').on('click', 'li', showPortfolio);
    $('.project-thumbnail').on('click', openModal);
    $('.next').on('click', function() {
        showSlides(slideIndex += 1);
    });
    $('.prev').on('click', function() {
        showSlides(slideIndex -= 1);
    })
    $('.close').on('click', closeModal);
    // $('.arrow').on('click', toggleMoreInfo);
    hideSections();
});