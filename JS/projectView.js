'use strict';

var portfolioData = [];

var Project = function(projectObj) {
    this.thumbnail = projectObj.thumbnail;
    this.blurb = projectObj.blurb;
    this.url = projectObj.url;
    this.alt = projectObj.alt;
    this.date = projectObj.date;
};

Project.prototype.toHtml = function() {
    var templateFiller = Handlebars.compile($('#project-template').html() );
    console.log(templateFiller);
    var filledTemplate = templateFiller(this);
    return filledTemplate;   
}

projectData.sort(function(a,b){
    return (new Date(b.date))-(new Date(a.date));
});

projectData.forEach(function(project){
    portfolioData.push(new Project(project));
});

portfolioData.forEach(function(addProject){
    $('#portfolio').append(addProject.toHtml());
})