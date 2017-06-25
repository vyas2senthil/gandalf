"use strict";

var getStarted = linkComponent('/getStarted',
	'Import your data into the interface of your choosing securely using the Oracle Service Cloud REST API.');

var getStartedInfo = {
    view: function(ctrl, args) {
        return m('div',{'class':'container text-center fade-in'}, [
            returnHome(m.route()),
            m('br'),m('br'),m('br'),m('br'),
            m('h1',{'class':'bold-title'},'Get Started'),
            m('br'),m('br'),m('br'),m('br'),m('br'),m('br'),
            m('div',{'class':'container lead sub-title text-left'},[
                m('br'),m('br'),
            ])
        ])
    }
}