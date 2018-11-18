const $nav = $('.nav-menu');

function toggleMenu() {
    $nav.toggleClass('show');
}

function navActive(event) {
$('.social-links').toggleClass('show');
event.stopPropagation();
event.preventDefault();
}

function openModal() {
    $('#modal-container').css('display', 'block');
    var $projectList = $('div.my-portfolio');
    $projectList.fadeIn();
    const $projectClicked = $(this).data('project-id');
    $('#' + $projectClicked).addClass('firstProject');
    $('.next').on('click', function() {
        const lastId = $('.my-portfolio').last().attr('id');
        const currentId = $('.firstProject').attr('id');
        if (currentId == lastId) {
            $('.firstProject').removeClass('firstProject');
            $('.my-portfolio').first().addClass('firstProject');
        } else {
            const $next = $('.firstProject').next();
            $('.firstProject').removeClass('firstProject');
            $next.addClass('firstProject');
        }
    });
    $('.prev').on('click', function() {
        const firstId = $('.my-portfolio').first().attr('id');
        const currentId = $('.firstProject').attr('id');
        if (currentId == firstId) {
            $('.firstProject').removeClass('firstProject');
            $('.my-portfolio').last().addClass('firstProject');
        } else {
            const $previous = $('.my-portfolio').prev();
            $('.firstProject').removeClass('.firstProject');
            $previous.addClass('firstProject');
        }
    });
}

function closeModal() {
    $('#modal-container').css('display', 'none');
    $('.my-portfolio').hide();
}

function setupSocialIcons() {
    $('.social-icons').each(function(index) {
        $(this).css('transition-delay', (index * 0.15) + 's');
    });
}

$(document).ready(function() {
    $('.icon-menu').on('click', toggleMenu);
    $('#menu-arrow').on('click', toggleMenu);
    $('.closebtn').on('click', toggleMenu);
    $('.social-container a').on('click', navActive);
    $('.project-thumbnail').on('click', openModal);
    $('.close').on('click', closeModal);
    setupSocialIcons();
});