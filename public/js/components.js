'use strict';


var openChild = openCloseState(prodCatHashArray);

// place holder
var productCategoryWidget = function(prodCatArray){
    var nestedProdCatObject = getTree(prodCatArray);
    

    return {
        controller: function(){
            return { 
                openOrClose : function(args){
                    m.startComputation();
                    openChild[args] = !openChild[args];
                    m.endComputation();
                }
            }
            
        },
        view : function(ctrl){
            return m('div',[
                nestedProdCatObject.map(function(pco){
                    var withChildrenClass = openChild[pco['product_name']] === true ? ' clicked-on' : '';
                    var className = pco.children.length > 0 ? 'nested link underline fade-in '+withChildrenClass : 'fade-in no-underline';
                    return m('div',{},[
                        m('p',{'class':className,onclick:function(){return ctrl.openOrClose(pco['product_name'])}},pco['product_name']),
                        m('div',{'class':'indented'},[
                            openChild[pco['product_name']] === true ? productCategoryWidget(pco.children) : ''
                        ])
                    ])
                })    
            ])
        }
    }
}

// CSV Table example
var csvTable = {
    view: function(){
        return m('pre',{'class':'panel panel-default','id':'CSV'},[
                m('p',{},'"Product Name","Product Parent"'),
                numberArr.map(function(num){
                    return numberArr.map(function(num2){
                        var productLabel = function(num2,num){
                            return '"Product ' + num2 + ' Level ' + num + '"'
                        }
                        var parentLvl = parseInt(num) - 1 == 0 ? '""' : productLabel(parseInt(num2),parseInt(num)-1);
                        return m('p',{'class':'lvl' + num},[
                            m('span',{},(productLabel(num2,num)+','+parentLvl)),
                        ])
                    })
                }),
            ])
    }
}



// Component to link back home
// string currentRoute is checks if the current route is at the root
var returnHome = function(currentRoute){
    if( currentRoute!=='/'){
        return {
            view: function(){
                return m('strong',{'class':'top-left link',onclick:function(){ return m.route('/')}},[
                    m('i',{'class':'fa fa-home fa-2x','aria-hidden':'true'}),
                    m('span',{'class':'gandalf hidden-xs hidden-sm'},'Home'),
                ])
            }
        }
    }
}



// Component for Links on first page
// string linkRoute is the route for the link
// object || string linkText is for the link text or an object to be passed in
 
var linkComponent = function(linkRoute,linkText){
    return {
        controller: function(){
            this.migrate = function(linkRoute){
                scrollTo(0,0);
                m.route(linkRoute);
            } 
        },
        view: function(ctrl,args){
            return m('div',{'class':'link'},[
                m('span',{onclick:function(){return ctrl.migrate(linkRoute)}},linkText)
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
            return  m('div',{'class':'col-lg-4 col-md-4 col-sm-12 col-xs-12 panel panel-default panel-color'},[
                        m('h2',{'class':'panel-body'},[
                            m('span',{'class':'big badge hidden-xs hidden-sm'},index),
                            m('span',{'class':'sub-title'},panelTitle)
                        ]),
                        m('i',{'class':iconClass,'aria-hidden':'true'}),
                        m('br'),m('br'),m('br'),
                        m('p',{'class':'sub-title lead'},linkComponent)
                    ])
        },
    }
}
