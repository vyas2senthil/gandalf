'use strict';

var uploadYourCsv = linkComponent('/uploadYourCsv',
	'Upload a CSV with the list of products or categories ordered from the lowest level to the highest level.');

var uploadYourCsvInfo = {
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