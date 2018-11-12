'use strict';

(function(module) {
    const indexController = {};
    indexController.show = () => {
        $('.social-links').hide();
        $('#portfolio').hide();
        // $('.nav-menu').css('width', '0');
    }
    module.indexController = indexController;
})(window);
