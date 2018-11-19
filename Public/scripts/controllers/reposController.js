'use strict';

(function(module) {
    const reposController = {};

    reposController.show = function() {
        $('#repos-container').show();
        portfolioRepos.request(projectReposView.index);
    };

    module.reposController = reposController;
}) (window);