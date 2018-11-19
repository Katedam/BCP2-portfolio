'use strict';

(function(module) {
    const projectReposView = {};

    const render = Handlebars.compile($('#github-repos').text());
    projectReposView.index = function(){
        $('#repos-container ul').append(portfolioRepos.all.map(render)
        );
        $('.nav-menu').removeClass('show');
        $('header').hide();
        $('.header-span-img').hide();
        $('#portfolio').hide();
    }

    module.projectReposView = projectReposView;
}) (window);