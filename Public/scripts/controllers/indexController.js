'use strict';

(function(module) {
    const indexController = {};
    indexController.show = () => {
        $('#portfolio').hide();
        if ($(window).width() < 800) {
           $('.nav-menu').css('width', '0'); 
        } else {
            $('.nav-menu').css('width', '10%');
            $('.nav-menu a').hide();
            $('.menu-arrow').show();
            $('.nav-menu').removeClass('nav-color-change');
        }
    }
    module.indexController = indexController;
})(window);
