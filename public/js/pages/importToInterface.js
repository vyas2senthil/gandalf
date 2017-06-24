"use strict";

var importToInterface = linkComponent('/importToInterface',
	'Import your data into the interface of your choosing securely using the Oracle Service Cloud REST API.');

var importToInterfaceInfo = {
    view: function(ctrl, args) {
        return m('div',{'class':'container text-center fade-in'}, [
            m('h1',{},'Import to Interface'),
            m('br'),m('br'),m('br'),m('br'),m('br'),m('br'),
            m('div',{'class':'container-fluid'},[
                m('p',{},'sup')
            ])
        ])
    }
}