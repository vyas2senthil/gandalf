"use strict";

var verifyYourResults = linkComponent('/verifyYourResults',
	'Verify the results of your CSV upload. Validate the results in the browser before committing your changes.');

var verifyYourResultsInfo = {
    view: function(ctrl, args) {
        return m('div',{'class':'container text-center fade-in'}, [
            m('h1',{},'Verify Your Results'),
            m('br'),m('br'),m('br'),m('br'),m('br'),m('br'),
            m('div',{'class':'container-fluid'},[
                m('p',{},'sup')
            ])
        ])
    }
}