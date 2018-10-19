'use strict';

var hideSections = function() {
    // $('.nav-menu').hide();
    $('.social-links').hide();
    $('#portfolio').hide();
}

var menuToggle = function() {
    $('.nav-menu').toggle();
}

var navActive = function() {
    $(this).addClass('active');
    if ($(this).data('content','social')) {
        $('.social-links').toggle();
    }
}

var navReset = function() {
    $(this).removeClass('active');
    $('.social-links').hide();
}

var showPortfolio = function() {
    if ($(this).data('content', 'portfolio')) {
        $('#portfolio').show();
        $('.nav-menu').hide();
    }
}

var portfolioData = [];

var Project = function(projectObj) {
    this.thumbnail = projectObj.thumbnail;
    this.blurb = projectObj.blurb;
    this.url = projectObj.url;
    this.alt = projectObj.alt;
    this.date = projectObj.date;
};

Project.prototype.toHtml = function() {
    var $newProject = $('div.template').clone();
    $newProject.removeClass('template');
    $newProject.children('img').attr({
            'src': this.thumbnail,
            'alt':  this.alt
        });
    $newProject.children('a').attr('src', this.url).text('+');
    $newProject.children('p').text(this.blurb);
    return $newProject;    
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

$(document).ready(function() {
    $('.icon-menu').on('click', menuToggle);
    $('.nav-menu li').on('mouseover', navActive);
    $('.nav-menu li').on('mouseleave', navReset);
    $('.nav-menu li').on('mouseleave', navReset);
    $('.nav-menu li').on('click', showPortfolio);
    hideSections();
});