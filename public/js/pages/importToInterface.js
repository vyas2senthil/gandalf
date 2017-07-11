"use strict";

var importToInterface = linkComponent('/importToInterface',
	'Securely import your data into your interface using the Oracle Service Cloud REST API.');

var importToInterfaceInfo = {
    view: function(ctrl, args) {
        return m('div',{'class':'container text-center fade-in'}, [
            returnHome(m.route()),
            m('br'),m('br'),m('br'),m('br'),
            m('h1',{'class':'bold-title'},'Import to Interface'),
            m('br'),m('br'),m('br'),m('br'),m('br'),m('br'),
            m('div',{'class':'container lead sub-title text-left'},[
                m('p',{},'Once your results have been verified, you can import them into the interface of your choosing.'),
                m('br'),
                m('p',{},'You will have the choice to either:'),
                m('br'),
                m('ol',{},[
                    m('li',{},'Use your credentials and the REST API to make these changes.'),
                    m('li',{},'Download custom controller code to make these changes.'),
                ]),
                m('br'),m('br'),
                m('h2',{'class':'link underline text-center',onclick:function(){ return m.route('/')}},'Back to Home')
            ])
        ])
    }
}