'use strict';
const $nav = $('.nav-menu');
function initIndexPage() {
    $('.social-links').hide();
    $('#portfolio').hide();
    $('.hello-img').css('width', '25%');
    $('.header-img').css('opacity', '1');
}

function menuShow() {
    if($nav.css('width', '0')) {
        $nav.css('width', '100vw');
        $('.nav-menu ul a').css('display', 'block');
        $nav.addClass('nav-color-change');
        $('.menu-arrow').hide();
        $('.closebtn').show();
    } else {
        $nav.css('width', '0')
    }    
}

function menuHide() {
    
    if ($(window).width() < 800)  {
        $nav.css('width', '0'); 
        $('.icon-menu').show();
    } else {
        $nav.css('width', '10%');
        $($nav, 'a').hide();
        $nav.removeClass("nav-color-change");
        $('.menu-arrow').show();
    }
}

function navActive(event) {
    $('.social-links').toggleClass('show');
    event.stopPropagation();
    event.preventDefault();
}

function showSection() {
    if ($(this).data().content == 'portfolio') {
        $('#portfolio').show();
        $nav.css('width', '0');
        $('.icon-menu').on('click', menuShow);
    } else {
        initIndexPage();
        menuHide();
    }
}

function openModal() {
    $('#modal-container').css('display', 'block');
    var $projectList = $('.my-portfolio');
    $projectList.fadeIn();
    $projectList.first().addClass('firstProject');
    $('.next').on('click', function() {
        
        $('.modal').find($('.firstProject')).removeClass('firstProject')
            .next().addClass('firstProject');
        if ($projectList.last().hasClass('firstProject')) {
            $projectList.last().removeClass('firstProject');
            $projectList.first().addClass('firstProject');
        }
    });
    $('.prev').on('click', function() {
        $('.modal').find($('.firstProject')).removeClass('firstProject')
            .prev().addClass('firstProject');
        if ($projectList.first().hasClass('firstProject')) {
            $projectList.first().removeClass('firstProject');
            $projectList.last().addClass('firstProject');
        } 
    })
    const id = $(this).data("project-id");
    // $(`#${id}`).fadeIn();
    // $('.next').on('click', function() {
    //     $projectList.fadeOut();
    //     const nextId = id + 1;
    //     $(`#${nextId}`).fadeIn();
    // })
}
//put all images in div in a line - use overflow: hidden to hide extras.
//

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

function setupSocialIcons() {
    $('.social-icons').each(function(index) {
        $(this).css('transition-delay', (index * 0.15) + 's');
    });
}

$(document).ready(function() {
    $('.icon-menu').on('click', menuShow);
    $('#menu-arrow').on('click', menuShow);
    $('.closebtn').on('click', menuHide);
    $('.social-container a').on('click', navActive);
    $('.project-thumbnail').on('click', openModal);
    $('.close').on('click', closeModal);
    setupSocialIcons();
});