// Write functions for going through data structures easily for rendering a nested product/category tree

// Array to generate table component
var numberArr = [1,2,3];

var prodCatHashArray = [];

numberArr.map(function(num){
	return numberArr.map(function(num2){
		var productLabel = function(num2,num){
            return 'Product ' + num2 + ' Level ' + num
        }
        var parentLvl = parseInt(num) - 1 == 0 ? undefined : productLabel(parseInt(num2),parseInt(num)-1);
        var prodCatObject = {};
        prodCatObject['product_name'] = productLabel(num2,num);
        prodCatObject['product_parent'] = parentLvl;
        prodCatHashArray.push(prodCatObject);
	})	
})

// Modified from https://stackoverflow.com/questions/12286831/convert-a-flat-set-of-records-with-parent-key-to-a-nested-structure
// Will probably need to refactor at some point

var getTree = function(prodCatArray){
	
	var hash = {};
    var nestedProdCatObject = [];

    for (var i = 0; i < prodCatArray.length; i++) {
        var prodCat = prodCatArray[i];
        var childrenArray = prodCat.children !=undefined ? prodCat.children : [];
        hash[prodCat['product_name']] = {
            'product_name':prodCat['product_name'], 
            'product_parent':prodCat['product_parent'], 
            children: childrenArray
        };
    }
    for (var i = 0; i < prodCatArray.length; i++) {
        var prodCat = hash[prodCatArray[i]['product_name']];
        var product_parent = hash[prodCat['product_parent']];
        if (product_parent) {
            product_parent.children.push(prodCat);
        } else {
            nestedProdCatObject.push(prodCat);
        }
    }
    return nestedProdCatObject;
}

var openCloseState = function(array){
	var hash = {};
	for (var i = array.length - 1; i >= 0; i--) {
		hash[array[i]['product_name']] = false;
	};
	return hash;
}