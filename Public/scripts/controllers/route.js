'use strict';

page('/', indexController.show);
page('/portfolio', portfolioController.show);
page('/repos', reposController.show);
page();