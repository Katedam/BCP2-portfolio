'use strict';

//constructor function
var Project = function(projectObj) {
    this.thumbnail = projectObj.thumbnail;
    this.blurb = projectObj.blurb;
    this.url = projectObj.url;
    this.alt = projectObj.alt;
    this.date = projectObj.date;
};

//this array of 'all' projects is tracking directly on the constructor function
Project.all = [];

//this object prototype fills the template to show the projects
Project.prototype.toHtml = function() {
    var templateFiller = Handlebars.compile($('#project-template').html() );
    console.log(templateFiller);
    var filledTemplate = templateFiller(this);
    return filledTemplate;   
}

//this sorts and pushes all of the data into new objects in the
Project.loadAll = function(rawData) {
    rawData.sort(function(a,b){
        return (new Date(b.date))-(new Date(a.date));
        //look up date constructor
    }); 
    rawData.forEach(function(project){
        Project.all.push(new Project(project));
    });
}

Project.fetchAll = function () {
    if (localStorage.rawData) {
        Project.loadAll(JSON.parse(localStorage.rawData));
        Project.initPortfolioPage();
    } else {
        $.get('Data/project-data-json.json', showJson);
    } 
    function showJson(response) {
        localStorage.setItem('Projects', JSON.stringify(response));
        Project.loadAll(response);
        Project.initPortfolioPage();
    }
};

Project.initPortfolioPage = function() {
    Project.all.forEach(function(project) {
        $('#portfolio').append(project.toHtml());
    });
};

// portfolioData.forEach(function(addProject){
//     $('#portfolio').append(addProject.toHtml());
// });