'use strict';

(function(module) {
    const indexController = {};
    indexController.show = () => {
        $('#portfolio').hide();
        $('#repos-container').hide();
        if ($(window).width() < 800) {
            $('.nav-menu').hide();
        } else {
            $('.menu-arrow').show();
        }
    }
    module.indexController = indexController;
})(window);
