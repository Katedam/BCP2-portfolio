// 'use strict';

(function(module) {
    const portfolioRepos = {};

    portfolioRepos.all = [];

    portfolioRepos.request = function(callback) {
        $.getJSON('https://api.github.com/users/katedam/repos')
        .then(data => {
            portfolioRepos.all = data;
            // data.map(data => {portfolioRepos.all.push(data)});
        }) 
        .then(callback);
    }
    
    module.portfolioRepos = portfolioRepos;
}) (window);

