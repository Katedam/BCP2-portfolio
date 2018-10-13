var Project = function(thumbnail, blurb, link, alt) {
    this.thumbnail = thumbnail;
    this.blurb = blurb;
    this.route = link;
    this.alt = alt;
}

var portfolioData = [];
portfolioData.push(new Project("images/jam-time-thumbnail.jpg", "This is information about Jam time and the important aspect of the application", "https://github.com/Katedam/Jam-Time", "Thumbnail showing the homepage for the site 'Jame Time'"));
portfolioData.push(new Project("images/studio-portfolio-thumbnail", "This is important information about my personal art portfolio site", "https://github.com/Katedam/Studio-Portfolio-Site", "Thumbnail showing the homepage for Kate Dameron's Art Portfolio site"));
portfolioData.push(new Project("images/salmon-cookies-thumbnail", "This is information about this project and what aspects are important", "https://github.com/Katedam/cookie-store", "Thumbnail showing the homepage for Pat's Cookies and Coffee Shop"));
portfolioData.push(new Project("images/market-analysis-thumbnail", "This is information and hightlights about this project", "https://github.com/Katedam/market-analysis-app", "Thumbnail showing the homepage for the BusMall Market Analysis App"));

displayProjects = function() {
    console.log('called function');
    var portfolio = document.getElementById('portfolio');
    console.log(portfolio);
    var link = document.createElement('a');
    console.log(link);
    var img = document.createElement('img');
    console.log(img);
    var blurb = document.createElement('p');
    console.log(blurb);
    for (var i = 0; i < portfolioData; i++) {
        console.log('in the loop');
        // link = document.createElement('a');
        // console.log(link);
        // link.setAttribute('href', portfolioData[i].link);
        // link.setAttribute('class', 'project-thumbnail');
        // console.log(link);
        // img = document.createElement('img');
        // img.setAttribute('src', portfolioData[i].thumbnail);
        // img.setAttribute('atl', portfolioData[i].alt);
        // link.appendChild(img);
        // portfolio.appendChild(link);
        // console.log(portfolio);
        // blurb = document.createElement('p');
        // blurb.innerText = portfolioData[i].blurb;
        // portfolio.appendChild(blurb);
        // console.log(portfolio);
    }
}

$(document).ready(() => {

})