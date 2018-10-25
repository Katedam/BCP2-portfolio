'use strict';

function hideSections() {
    // $('.nav-menu').hide();
    $('.social-links').hide();
    $('#portfolio').hide();
}

function menuShow() {
    $('.nav-menu').css('width', '100vw');
}

function menuHide() {
    $('.nav-menu').css('width', '0');
}

function navActive(event) {
    $('.social-links').show();
    event.stopPropagation();
    // if ($(this).data('content','social')) {
    //     $('.social-links').show();
    // }
}

// function navReset() {
//     $(this).removeClass('active');
//     $('.social-links').hide();
// }

function showPortfolio() {
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
    var templateFiller = Handlebars.compile($('#project-template').html() );
    console.log(templateFiller);
    var filledTemplate = templateFiller(this);
    return filledTemplate;

    // var $newProject = $('div.template').clone();
    // $newProject.removeClass('template');
    // $newProject.children('img').attr({
    //         'src': this.thumbnail,
    //         'alt':  this.alt
    //     });
    // $newProject.children('a').attr('src', this.url).text('+');
    // $newProject.children('p').text(this.blurb);
    // return $newProject;    
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
    $('.icon-menu').on('click', menuShow);
    $('.closebtn').on('click', menuHide);
    $('.social-container a').on('click', navActive);
    // $('.nav-menu').on('mouseleave', 'li', navReset);
    $('.nav-menu').on('click', 'li', showPortfolio);
    hideSections();
});