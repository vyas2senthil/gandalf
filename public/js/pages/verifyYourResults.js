"use strict";

var verifyYourResults = linkComponent('/verifyYourResults',
	'Validate the results of your upload in the browser before committing your changes.');

var verifyYourResultsInfo = {
    view: function(ctrl, args) {
        return m('div',{'class':'container text-center fade-in'}, [
            returnHome(m.route()),
            m('br'),m('br'),m('br'),m('br'),
            m('h1',{'class':'bold-title'},'Verify Your Results'),
            m('br'),m('br'),m('br'),m('br'),
            m('div',{'class':'container lead sub-title text-left'},[
                m('p',{},'After you have uploaded your CSV file, you will want to verify your results.'),
                m('br'),
                m('p',{},'This is to ensure that product/category mapping you are uploading is what you expect.'),
                m('br'),
                m('p',{},[
                    m('span',{},'For example, using the '),
                    m('a[href=/upload_your_csv#CSV]',{'class':'link underline'},'CSV example'),
                    m('span',{},' from the last page, you should see the following mapping for the products:'),
                ]),
                m('br'),
                m('div',{'class':'col-lg-12 col-md-12 col-sm-12 col-xs-12'},[
                    m('div',{'class':'col-lg-6 col-md-6 col-sm-12 col-xs-12'},[
                        csvTable
                    ]),
                    m('div',{'class':'col-lg-6 col-md-6 col-sm-12 col-xs-12'},[
                        productCategoryWidget(prodCatHashArray)
                    ]),
                ]),
                m('br'),m('br'),
                m('p',{},'Once your results have been verified, you can import them into the interface of your choosing.'),
                m('br'),m('br'),
                m('h2',{'class':'link underline text-center',onclick:function(){ return m.route('/import_to_interface')}},'Next: Import To Interface')
            ])
        ])
    }
}