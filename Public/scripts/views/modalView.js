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

$(document).ready(function() {
    $('.project-thumbnail').on('click', openModal);
    $('.close').on('click', closeModal);
});