// You have an array of integers, and for each index you want to find the product 
// of every integer except the integer at that index.
// Write a function get_products_of_all_ints_except_at_index() 
// that takes an array of integers and returns an array of the products.

var get_products_of_all_ints_except_at_index = function(arr) {
	var result = [];
  var product;
  for (var i = 0; i < arr.length; i++) {
    product = 1;
    for (var j = 0; j < arr.length; j++) {
      if(i !== j) {
        product *= arr[j];
      }
    };
    result.push(product);
	};
  return result;
};