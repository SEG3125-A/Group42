// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products

var products = [
	{
	  name: "Broccoli",
	  vegetarian: true,
	  vegan: true,
	  lactoseFree: true,
	  glutenFree: true,
	  organic: false,
	  price: 1.99,
	},
	{
	  name: "Bread",
	  vegetarian: true,
	  vegan: false,
	  lactoseFree: true,
	  glutenFree: false,
	  organic: false,
	  price: 2.35,
	},
	{
	  name: "Salmon",
	  vegetarian: false,
	  vegan: false,
	  lactoseFree: true,
	  glutenFree: true,
	  organic: false,
	  price: 10.0,
	},
	{
	  name: "Almond Milk",
	  vegetarian: true,
	  vegan: true,
	  lactoseFree: true,
	  glutenFree: true,
	  organic: true,
	  price: 3.5,
	},
	{
	  name: "Chicken Breast",
	  vegetarian: false,
	  vegan: false,
	  lactoseFree: true,
	  glutenFree: true,
	  organic: true,
	  price: 7.25,
	},
	{
	  name: "Cheddar Cheese",
	  vegetarian: true,
	  vegan: false,
	  lactoseFree: false,
	  glutenFree: true,
	  organic: false,
	  price: 4.5,
	},
	{
	  name: "Quinoa",
	  vegetarian: true,
	  vegan: true,
	  lactoseFree: true,
	  glutenFree: true,
	  organic: true,
	  price: 5.0,
	},
	{
	  name: "Greek Yogurt",
	  vegetarian: true,
	  vegan: false,
	  lactoseFree: false,
	  glutenFree: true,
	  organic: false,
	  price: 3.99,
	},
	{
	  name: "Tofu",
	  vegetarian: true,
	  vegan: true,
	  lactoseFree: true,
	  glutenFree: true,
	  organic: true,
	  price: 2.5,
	},
	{
	  name: "Honey",
	  vegetarian: true,
	  vegan: false,
	  lactoseFree: true,
	  glutenFree: true,
	  organic: true,
	  price: 6.0,
	},
	{
	  name: "Spinach",
	  vegetarian: true,
	  vegan: true,
	  lactoseFree: true,
	  glutenFree: true,
	  organic: true,
	  price: 2.99,
	},
	{
	  name: "Olive Oil",
	  vegetarian: true,
	  vegan: true,
	  lactoseFree: true,
	  glutenFree: true,
	  organic: true,
	  price: 8.5,
	},
	{
	  name: "Brown Rice",
	  vegetarian: true,
	  vegan: true,
	  lactoseFree: true,
	  glutenFree: true,
	  organic: false,
	  price: 3.75,
	},
	{
	  name: "Dark Chocolate",
	  vegetarian: true,
	  vegan: true,

	  glutenFree: true,
	  organic: false,
	  price: 3.15,
	},
  ];
  
  // given restrictions provided, make a reduced list of products
  // prices should be included in this list, as well as a sort based on price
  
  function restrictListProducts(prods, restriction) {
	let prodList = [];
  
	
	for (let i=0; i<prods.length; i++) {

		if(restriction.includes('vegetarian') && restriction.includes('glutenFree') && restriction.includes('organic')){
            if(prods[i].vegetarian && prods[i].glutenFree && prods[i].organic){
                prodList.push(prods[i]);
            }
        }

        else if(restriction.includes('vegetarian') && restriction.includes('glutenFree')){
            if(prods[i].vegetarian && prods[i].glutenFree){
                prodList.push(prods[i]);
            }
        }

        else if(restriction.includes('vegetarian') && restriction.includes('organic')){
            if(prods[i].vegetarian && prods[i].organic){
                prodList.push(prods[i]);
            }
        }

        else if(restriction.includes('glutenFree') && restriction.includes('organic')){
            if(prods[i].glutenFree && prods[i].organic){
                prodList.push(prods[i]);
            }
        }
        else if(prods[i].vegetarian && restriction.includes('vegetarian')) {
            prodList.push(prods[i]);
        } 

		else if(prods[i].glutenFree && restriction.includes('glutenFree')) {
            prodList.push(prods[i]);
        } 
		
		else if(prods[i].isOrganic && restriction.includes('organic')) {
            prodList.push(prods[i]);
        } 

		else if(restriction.includes('none')) {
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