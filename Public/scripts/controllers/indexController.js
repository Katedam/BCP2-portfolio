'use strict';

(function(module) {
    const indexController = {};
    indexController.show = () => {
        $('#portfolio').hide();
        $('#repos-container').hide();
        $('header').show();
        $('.header-span-img').show();
    }
    module.indexController = indexController;
})(window);
