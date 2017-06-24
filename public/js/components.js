'use strict';

// Component for Links on first page
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


// Component for Panels on first page
// string panelTitle is the title for the panel
// string iconClass is for getting the FontAwesome class for the icon needed
// object || string linkComponent is the linkComponent being passed in or the string

var panelComponent = function(panelTitle,iconClass,linkComponent,index){
    return {
        view: function(ctrl,args){
            return  m('div',{'class':'col-lg-4 col-md-4 col-sm-12 col-xs-12 panel panel-default'},[
                        m('h2',{'class':'panel-body'},[
                            m('span',{'class':'big badge'},index),
                            panelTitle
                        ]),
                        m('i',{'class':iconClass,'aria-hidden':'true'}),
                        m('br'),m('br'),m('br'),
                        m('p',{'class':'lead'},linkComponent)
                    ])
        },
    }
}
