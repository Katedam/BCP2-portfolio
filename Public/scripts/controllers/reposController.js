'use strict';

(function(module) {
    const reposController = {};

    reposController.show = function() {
        $('#repos-container').show().siblings().hide();
        portfolioRepos.request(projectReposView.index);
    };

    module.reposController = reposController;
}) (window);