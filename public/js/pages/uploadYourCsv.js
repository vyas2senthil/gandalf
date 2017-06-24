'use strict';

var uploadYourCsv = linkComponent('/uploadYourCsv',
    'Upload a CSV with the list of products or categories ordered from the lowest level to the highest level.');

var uploadYourCsvInfo = {
    view: function(ctrl, args) {
        return m('div',{'class':'container text-center fade-in'}, [
            returnHome(m.route()),
            m('br'),m('br'),m('br'),m('br'),
            m('h1',{},'Upload your CSV'),
            m('br'),m('br'),m('br'),m('br'),
            m('div',{'class':'container text-left lead'},[
                m('p',{},[
                    m('span',{},'First, you must put together a CSV with the list of products/categories ordered from the lowest level (products or categories '),
                    m('strong',{},'without'),
                    m('span',{},' parents to associate with) to the highest level (products or categories '),
                    m('strong',{},'with'),
                    m('span',{},' parent relationships).')
                ]),
                m('p',{},'This is to ensure that the products/categories are created in the correct order.'),
                m('br'),
                m('p',{},[
                    m('span',{},'For example, if you you had '),
                    m('strong',{},'4 levels'),
                    m('span',{},' of '),
                    m('strong',{},'4 products'),
                    m('span',{},' to import, the following is how the CSV should be laid out:')
                ]),
                csvTable,
                m('p',{},'All that is required is that products/categories are named, listed in the correct order, and reference the name of a parent product or category when applicable.'),
                m('br'),
                m('h2',{'class':'link underline text-center',onclick:function(){ return m.route('/verify_your_results')}},'Next: Verify your results')
            ]),
        ])
    }
}

