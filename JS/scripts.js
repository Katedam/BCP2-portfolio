var Project = function(projectObj) {
    this.thumbnail = projectObj.thumbnail;
    this.blurb = projectObj.blurb;
    this.url = projectObj.url;
    this.alt = projectObj.alt;
}

var portfolioData = [];

portfolioData.foreach(function(project)

portfolioData.push(new Project("images/jam-time-thumbnail.jpg", "This is information about Jam time and the important aspect of the application", "https://github.com/Katedam/Jam-Time", "Thumbnail showing the homepage for the site 'Jame Time'"));
portfolioData.push(new Project("images/studio-portfolio-thumbnail.jpg", "This is important information about my personal art portfolio site", "https://github.com/Katedam/Studio-Portfolio-Site", "Thumbnail showing the homepage for Kate Dameron's Art Portfolio site"));
portfolioData.push(new Project("images/salmon-cookies-thumbnail.jpg", "This is information about this project and what aspects are important", "https://github.com/Katedam/cookie-store", "Thumbnail showing the homepage for Pat's Cookies and Coffee Shop"));
portfolioData.push(new Project("images/market-analysis-thumbnail.jpg", "This is information and hightlights about this project", "https://github.com/Katedam/market-analysis-app", "Thumbnail showing the homepage for the BusMall Market Analysis App"));

$(document).ready(() => {
    displayProjects = function() {
    for (var i = 0; i < portfolioData.length; i++) {
        $newProjectLink = $('<a href="' + portfolioData[i].route + '" class="project-thumbnail"><img src="' + portfolioData[i].thumbnail + '" alt="' + portfolioData[i].alt + '"><div class="arrow-container"><span class="arrow down"></span></div></a>');
        console.log($newProjectLink)
        $('#portfolio').append($newProjectLink);
        $newProjectInfo = $('<p>' + portfolioData[i].blurb + '</p>').addClass('info hide');
        $('#portfolio').append($newProjectInfo);
    }
}
    displayProjects();

    $('.arrow-container').on('click', () => {
        $('.info').show();
    })
})

