'use strict';

(function(module) {
    const portfolioController = {};
    Project.fetchAll(Project.initPortfolioPage);
    Project.initPortfolioPage();
    portfolioController.show = () => {
        $('#portfolio').show();
        $('.nav-menu').css('width', '0');
        $('.icon-menu').show();
    }
    module.portfolioController = portfolioController;
})(window);