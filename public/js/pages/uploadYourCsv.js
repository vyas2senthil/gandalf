'use strict';
// Array to generate table component
var numberArr = [1,2,3,4];

// CSV Table example

var csvTable = {
    view: function(){
        return m('pre',{'class':'container panel panel-default'},[
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

var uploadYourCsv = linkComponent('/uploadYourCsv',
    'Upload a CSV with the list of products or categories ordered from the lowest level to the highest level.');

var uploadYourCsvInfo = {
    view: function(ctrl, args) {
        return m('div',{'class':'container text-center fade-in'}, [
            returnHome(m.route()),
            m('h1',{},'Upload your CSV'),
            m('br'),m('br'),
            m('div',{'class':'container-fluid text-left lead'},[
                m('p',{},'First, you must put together a CSV with the list of products/categories ordered from the lowest level to the highest level. This is to ensure that the products/categories are created in the correct order.'),
                m('br'),
                m('p',{},'For example, if you you had 4 levels of products to import, the following is how the CSV should be laid out:'),
                csvTable,
                m('p',{},'All that is required is that products/categories are named, listed in the correct order, and reference the name of a parent product or category when applicable.'),
                m('br'),
                m('h2',{'class':'link underline text-center',onclick:function(){ return m.route('/verify_your_results')}},'Next: Verify your results')
            ]),
        ])
    }
}

