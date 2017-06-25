'use strict';

var uploadYourCsv = linkComponent('/uploadYourCsv',
    'Upload a CSV with the list of products or categories ordered from the lowest level to the highest level.');

var uploadYourCsvInfo = {
    view: function(ctrl, args) {
        return m('div',{'class':'container text-center fade-in'}, [
            returnHome(m.route()),
            m('br'),m('br'),m('br'),m('br'),
            m('h1',{'class':'gandalf'},'Upload your CSV'),
            m('br'),m('br'),m('br'),m('br'),
            m('div',{'class':'container text-left sub-title lead'},[
                m('p',{},[
                    m('span',{},'First, you must put together a CSV with the list of products/categories ordered from the lowest level (products or categories '),
                    m('strong',{},'without'),
                    m('span',{},' parents to associate with) to the highest level (products or categories '),
                    m('strong',{},'with'),
                    m('span',{},' parent relationships).')
                ]),
                m('br'),
                m('p',{},'This is to ensure that the products/categories are created in the correct order.'),
                m('br'),
                m('p',{},[
                    m('span',{},'For example, if you you had '),
                    m('strong',{},numberArr.length + ' levels'),
                    m('span',{},' of '),
                    m('strong',{},numberArr.length + ' products'),
                    m('span',{},' to import, the following is how the CSV should be laid out:')
                ]),
                m('br'),m('br'),
                m('div',{'class':'container'},[
                    m('div',{'class':'col-lg-4 col-md-4 hidden-sm hidden-xs'},[]),
                    m('div',{'class':'col-lg-4 col-md-4 col-sm-12 col-xs-12'},[csvTable]),
                    m('div',{'class':'col-lg-4 col-md-4 hidden-sm hidden-xs'},[]),
                ]),
                m('br'),m('br'),
                m('p',{},'All that is required is that products/categories are named, listed in the correct order, and reference the name of a parent product or category when applicable.'),
                m('br'),m('br'),
                m('h2',{'class':'link underline text-center',onclick:function(){ return m.route('/verify_your_results')}},'Next: Verify your results')
            ]),
        ])
    }
}

