var Project = function(thumbnail, blurb, link, alt) {
    this.thumbnail = thumbnail;
    this.blurb = blurb;
    this.route = link;
    this.alt = alt;
}

var portfolioData = [];
portfolioData.push(new Project("images/jam-time-thumbnail.jpg", "This is information about Jam time and the important aspect of the application", "https://github.com/Katedam/Jam-Time", "Thumbnail showing the homepage for the site 'Jame Time'"));
portfolioData.push(new Project("images/studio-portfolio-thumbnail.jpg", "This is important information about my personal art portfolio site", "https://github.com/Katedam/Studio-Portfolio-Site", "Thumbnail showing the homepage for Kate Dameron's Art Portfolio site"));
portfolioData.push(new Project("images/salmon-cookies-thumbnail.jpg", "This is information about this project and what aspects are important", "https://github.com/Katedam/cookie-store", "Thumbnail showing the homepage for Pat's Cookies and Coffee Shop"));
portfolioData.push(new Project("images/market-analysis-thumbnail.jpg", "This is information and hightlights about this project", "https://github.com/Katedam/market-analysis-app", "Thumbnail showing the homepage for the BusMall Market Analysis App"));

$(document).ready(() => {
    displayProjects = function() {
        var portfolio = document.getElementById('portfolio');
        var link = document.createElement('a');
        var img = document.createElement('img');
        var blurb = document.createElement('p');
        for (var i = 0; i < portfolioData.length; i++) {
            link = document.createElement('a');
            link.setAttribute('href', portfolioData[i].link);
            link.setAttribute('class', 'project-thumbnail');
            img = document.createElement('img');
            img.setAttribute('src', portfolioData[i].thumbnail);
            img.setAttribute('atl', portfolioData[i].alt);
            link.appendChild(img);
            portfolio.appendChild(link);
            blurb = document.createElement('p');
            blurb.setAttribute('class', 'info hide');
            blurb.innerText = portfolioData[i].blurb;
            portfolio.appendChild(blurb);
            console.log(portfolio);
        }
    }
    displayProjects();
})