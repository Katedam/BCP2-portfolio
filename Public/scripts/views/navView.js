const $nav = $('.nav-menu');

function toggleMenu() {
    $nav.toggleClass('show');
    $('.closebtn').fadeToggle();
    // $('.social-links').hide();
    $('#menu-arrow').fadeToggle();
}

function navActive(event) {
$('.social-icons').toggleClass('show');
event.stopPropagation();
event.preventDefault();
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
    setupSocialIcons();
});