'use strict';

(function(module) {
    const projectReposView = {};

    const render = Handlebars.compile($('#github-repos').text());
    projectReposView.index = function(){
        $('#repos-container ul').append(
            portfolioRepos.all.map(render)
        );
    }

    module.projectReposView = projectReposView;
}) (window);