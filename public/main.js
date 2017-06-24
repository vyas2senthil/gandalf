"use strict";

// Component for Panels on first page
// string panelTitle is the title for the panel
// string iconClass is for getting the FontAwesome class for the icon needed
// object || string linkComponent is the linkComponent being passed in or the string

var panelComponent = function(panelTitle,iconClass,linkComponent){
    return {
        view: function(ctrl,args){
            return  m('div',{'class':'col-lg-4 col-md-4 col-sm-12 col-xs-12 panel panel-default'},[
                        m('h2',{'class':'panel-body'},panelTitle),
                        m('i',{'class':iconClass,'aria-hidden':'true'}),
                        m('br'),m('br'),m('br'),
                        m('p',{'class':'lead'},linkComponent)
                    ])
        },
    }
}
// Component for Link on first page
// string linkRoute is the route for the link
// object || string linkText is for the link text or an object to be passed in
 
var linkComponent = function(linkRoute,linkText){
    return {
        view: function(ctrl,args){
            return m('div',{},[
                m('span',{onclick:function(){ return m.route(linkRoute)}},linkText)
            ])
        }
    }
}

var uploadYourCSV = linkComponent('/uploadYourCSV','Upload a CSV with the list of products or categories ordered from the lowest level to the highest level.');
var verifyYourResults = 'Verify the results of your CSV upload. Validate the results in the browser before committing your changes.';
var importToInterface = 'Import your data into the interface of your choosing securely using the Oracle Service Cloud REST API.';

var homePage = {
    view: function(ctrl, args) {
        return m('div',{'class':'container text-center fade-in'}, [
            m('h1',{},'OSC Product/Category Data Import Tool'),
            m('br'),m('br'),m('br'),m('br'),m('br'),m('br'),
            m('div',{'class':'container-fluid'},[
                linkComponent('/uploadYourCSV',panelComponent('Upload your CSV','fa fa-upload fa-5x',uploadYourCSV)),
                panelComponent('Verify your results','fa fa-check-circle-o fa-5x',verifyYourResults),
                panelComponent('Import to Interface','fa fa-cloud-upload fa-5x',importToInterface),
            ])
        ])
    }
}

var uploadYourCSVInfo = {
    view: function(ctrl, args) {
        return m('div',{'class':'container text-center fade-in'}, [
            m('h1',{},'Upload your CSV'),
            m('br'),m('br'),m('br'),m('br'),m('br'),m('br'),
            m('div',{'class':'container-fluid'},[
                m('p',{},'sup')
            ])
        ])
    }
}