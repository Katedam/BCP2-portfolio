var Project = function(thumbnail, blurb, link) {
    this.thumbnail = thumbnail;
    this.blurb = blurb;
    this.route = link;
}

var portfolioData = [];
portfolioData.push(new Project("images/jam-time-thumbnail.jpg", "This is information about Jam time and the important aspect of the application", "https://github.com/Katedam/Jam-Time"));
portfolioData.push(new Project("images/studio-portfolio-thumbnail", "This is important information about my personal art portfolio site", "https://github.com/Katedam/Studio-Portfolio-Site"));
portfolioData.push(new Project("images/salmon-cookies-thumbnail", "This is information about this project and what aspects are important", "https://github.com/Katedam/cookie-store"));
portfolioData.push(new Project("images/market-analysis-thumbnail", "This is information and hightlights about this project", "https://github.com/Katedam/market-analysis-app"));

