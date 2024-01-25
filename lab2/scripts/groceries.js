// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products

var products = [
	{
	  name: "Broccoli",
	  vegetarian: true,
	  glutenFree: true,
	  organic: false,
	  price: 1.99,
	},
	{
	  name: "Bread",
	  vegetarian: true,
	  glutenFree: false,
	  organic: false,
	  price: 2.35,
	},
	{
	  name: "Salmon",
	  vegetarian: false,
	  glutenFree: true,
	  organic: false,
	  price: 10.0,
	},
	{
	  name: "Almond Milk",
	  vegetarian: true,
	  glutenFree: true,
	  organic: true,
	  price: 3.5,
	},
	{
	  name: "Chicken Breast",
	  vegetarian: false,
	  glutenFree: true,
	  organic: true,
	  price: 7.25,
	},
	{
	  name: "Cheddar Cheese",
	  vegetarian: true,
	  glutenFree: true,
	  organic: false,
	  price: 4.5,
	},
	{
	  name: "Quinoa",
	  vegetarian: true,
	  glutenFree: true,
	  organic: true,
	  price: 5.0,
	},
	{
	  name: "Greek Yogurt",
	  vegetarian: true,
	  glutenFree: true,
	  organic: false,
	  price: 3.99,
	},
	{
	  name: "Tofu",
	  vegetarian: true,
	  glutenFree: true,
	  organic: true,
	  price: 2.5,
	},
	{
	  name: "Honey",
	  vegetarian: true,
	  glutenFree: true,
	  organic: true,
	  price: 6.0,
	},
	{
	  name: "Spinach",
	  vegetarian: true,
	  glutenFree: true,
	  organic: true,
	  price: 2.99,
	},
	{
	  name: "Olive Oil",
	  vegetarian: true,
	  glutenFree: true,
	  organic: true,
	  price: 8.5,
	},
	{
	  name: "Brown Rice",
	  vegetarian: true,
	  glutenFree: true,
	  organic: false,
	  price: 3.75,
	},
	{
	  name: "Dark Chocolate",
	  vegetarian: true,
	  glutenFree: true,
	  organic: false,
	  price: 3.15,
	},
  ];
  
  // given restrictions provided, make a reduced list of products
  // prices should be included in this list, as well as a sort based on price
  
	function restrictListProducts(prods, restriction) {
		let prodList = [];

		var isVegeterian = restriction.includes('vegetarian');
		var isGlutenFree = restriction.includes('glutenFree');
		var isOrganic = restriction.includes('organic');
		
		
		for (let i=0; i<prods.length; i++) {

			if(prods[i].vegetarian == isVegeterian && prods[i].glutenFree == isGlutenFree && prods[i].organic == isOrganic){
				prodList.push(prods[i]);
			}
		}
		return prodList.sort((a, b) => a.price - b.price);
	}
  
  // Calculate the total price of items, with received parameter being a list of products
  function getTotalPrice(chosenProducts) {
	let totalPrice = 0;
	for (let i = 0; i < products.length; i += 1) {
	  if (chosenProducts.indexOf(products[i].name) > -1) {
		totalPrice += products[i].price;
	  }
	}
	return totalPrice;
  }
