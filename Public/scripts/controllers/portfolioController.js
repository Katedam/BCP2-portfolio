'use strict';

(function(module) {
    const portfolioController = {};
    Project.fetchAll(Project.initPortfolioPage);
    portfolioController.show = () => {
        $('#portfolio').show();
        $('#repos-container').hide();
    }
    module.portfolioController = portfolioController;
})(window);