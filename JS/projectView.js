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

Project.loadAll = function(rawData) {
    rawData.sort(function(a,b){
        return (new Date(b.date))-(new Date(a.date));
    }); 
    rawData.forEach(function(project){
        Project.all.push(new Project(project));
    });
}

Project.fetchAll = function () {
    if (localStorage.rawData) {
        Project.loadAll(JSON.parse(localStorage.rawData));
    } else {
        function getJSON() {
            $.get('Data/project-data-json.json', showJson);
        } 
        getJSON();
        function showJson(response) {
            console.log('retrieved json: ', response);
            localStorage.setItem('Projects', JSON.stringify(response));
            Project.loadAll(response);
        }
    }
}



portfolioData.forEach(function(addProject){
    $('#portfolio').append(addProject.toHtml());
})