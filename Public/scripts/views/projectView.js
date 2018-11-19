'use strict';

var portfolioData = [];

var Project = function(projectObj) {
    this.thumbnail = projectObj.thumbnail;
    this.blurb = projectObj.blurb;
    this.url = projectObj.url;
    this.alt = projectObj.alt;
    this.date = projectObj.date;
    this.sort = projectObj.sort;
    this.index = projectObj.index;
};

Project.all = [];

Project.prototype.toHtml = function(id) {
    var templateFiller = Handlebars.compile($(id).html() );
    var filledTemplate = templateFiller(this);
    return filledTemplate;   
}

Project.loadAll = function(rawData) {
    rawData.sort(function(a,b){
        return (new Date(a.sort))-(new Date(b.sort));
    }); 
    rawData.forEach(function(project){
        Project.all.push(new Project(project));
    });
}

Project.fetchAll = function (callback) {
    if (localStorage.rawData) {
        Project.loadAll(JSON.parse(localStorage.rawData));
        callback();
    } else {
        $.get('Data/project-data-json.json', showJson);
    } 
    function showJson(response) {
        localStorage.setItem('Projects', JSON.stringify(response));
        Project.loadAll(response);
        callback();
    }
};

Project.showNewSlide = function() {
    console.log(Project.all[2].index);
    
}

Project.initPortfolioPage = function() {
    Project.all.forEach(function(project) {
        $('#portfolio').append(project.toHtml('#project-template'));
        $('#modal-container').prepend(project.toHtml('#myModal'));
    });
};
