// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products
const products = [
    {
        name: "Broccoli",
        category: "Vegetables",
        vegetarian: true,
        glutenFree: true,
        organic: false,
        price: 1.99,
        ingredients: ["Broccoli"],
        image: "https://www.onceuponachef.com/images/2022/04/roasted-broccoli-1120x810.jpg"
    },
    {
        name: "Bread",
        category: "Bakery",
        vegetarian: true,
        glutenFree: false,
        organic: false,
        price: 2.35,
        ingredients: ["Wheat flour", "Yeast", "Salt", "Water"],
        image: "https://houseofnasheats.com/wp-content/uploads/2022/02/French-Bread-1.jpg"
    },
    {
        name: "Salmon",
        category: "Meat",
        vegetarian: false,
        glutenFree: true,
        organic: false,
        price: 10.0,
        ingredients: ["Salmon"],
        image: "https://somontarifi.com/wp-content/uploads/2014/11/somon-baligi-fiyati-dilim-fileto.jpg"
    },
    {
        name: "Almond Milk",
        category: "Beverages",
        vegetarian: true,
        glutenFree: true,
        organic: true,
        price: 3.5,
        ingredients: ["Almonds", "Water", "Salt"],
        image: "https://nutritionrefined.com/wp-content/uploads/2016/11/almond-milk-featured.jpg"
    },
    {
        name: "Chicken Breast",
        category: "Meat",
        vegetarian: false,
        glutenFree: true,
        organic: true,
        price: 7.25,
        ingredients: ["Chicken breast"],
        image: "https://butchershoppedirect.com/cdn/shop/products/butcher-shoppe-direct-boneless-skinless-chicken-breasts-15517883433043_1800x1800.jpg?v=1633955123"
    },
    {
        name: "Cheddar Cheese",
        category: "Dairy",
        vegetarian: true,
        glutenFree: true,
        organic: false,
        price: 4.5,
        ingredients: ["Milk", "Salt", "Enzymes"],
        image: "https://www.verywellfit.com/thmb/qCFraQvwmOGLn6oJeaJybaN8Cjc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/cheddar-cheese-crop-3fdf5ad3229e4748bbc0b8acdc442dcd.jpg"
    },
    {
        name: "Quinoa",
        category: "Grains",
        vegetarian: true,
        glutenFree: true,
        organic: true,
        price: 5.0,
        ingredients: ["Quinoa"],
        image: "https://www.acouplecooks.com/wp-content/uploads/2022/02/Quinoa-007.jpg"
    },
    {
        name: "Greek Yogurt",
        category: "Dairy",
        vegetarian: true,
        glutenFree: true,
        organic: false,
        price: 3.99,
        ingredients: ["Milk", "Live yogurt cultures"],
        image: "https://thegreekfoodie.com/wp-content/uploads/2021/08/How_to_make_greek_yogurt_SQ.jpg"
    },
    {
        name: "Tofu",
        category: "meat-alternatives",
        vegetarian: true,
        glutenFree: true,
        organic: true,
        price: 2.5,
        ingredients: ["Soybeans", "Water", "Calcium sulfate"],
        image: "https://upload.wikimedia.org/wikipedia/commons/0/03/Japanese_SilkyTofu_%28Kinugoshi_Tofu%29.JPG"
    },
    {
        name: "Honey",
        category: "Sweets",
        vegetarian: true,
        glutenFree: true,
        organic: true,
        price: 6.0,
        ingredients: ["Honey"],
        image: "https://assets.bonappetit.com/photos/608c1f0b6863f9a7d9726bdf/16:9/w_1920,c_limit/Basically-HONEY.jpg"
    },
    {
        name: "Spinach",
        category: "Vegetables",
        vegetarian: true,
        glutenFree: true,
        organic: true,
        price: 2.99,
        ingredients: ["Spinach"],
        image: "https://i0.wp.com/post.healthline.com/wp-content/uploads/2019/05/spinach-1296x728-header.jpg?w=1575"
    },
    {
        name: "Olive Oil",
        category: "Condiments",
        vegetarian: true,
        glutenFree: true,
        organic: true,
        price: 8.5,
        ingredients: ["Olive oil"],
        image: "https://rizoscurls.com/cdn/shop/articles/rizoscurlsoliveoil.png?v=1618003199&width=1200"
    },
    {
        name: "Brown Rice",
        category: "Grains",
        vegetarian: true,
        glutenFree: true,
        organic: false,
        price: 3.75,
        ingredients: ["Brown rice"],
        image: "https://dainty.ca/wp-content/uploads/2021/07/brown-rice-recipe-1.jpg"
    },
    {
        name: "Dark Chocolate",
        category: "Sweets",
        vegetarian: true,
        glutenFree: true,
        organic: false,
        price: 3.15,
        ingredients: ["Cocoa mass", "Sugar", "Cocoa butter", "Vanilla"],
        image: "https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/02/dark-chocolate-bar-1296x728-header.jpg?w=1575"
    }
];

function filterProductsByCategoryAndRestrictions() {
    let categorySelect = document.getElementById('productCategory');
    let selectedCategory = categorySelect.value;

    let restrictionsForm = document.forms['restrictions'];
    let selectedRestrictions = Array.from(restrictionsForm.elements['restriction'])
                                    .filter(input => input.checked)
                                    
                                    .map(input => input.value);

    let productListContainer = document.getElementById('displayProduct');
    productListContainer.innerHTML = "";

    let filteredProducts = filterProductsByCategoryAndRestrictionsHelper(products, selectedCategory, selectedRestrictions);

    for (let product of filteredProducts) {
        appendProductToContainer(productListContainer, product);
    }
}

function filterProductsByCategoryAndRestrictionsHelper(products, selectedCategory, selectedRestrictions) {
    const isVegetarian = selectedRestrictions.includes('vegetarian');
    const isGlutenFree = selectedRestrictions.includes('glutenFree');
    const isOrganic = selectedRestrictions.includes('organic');

    return products.filter(product => 
        (selectedCategory === 'all' || product.category.toLowerCase() === selectedCategory) &&
        (!isVegetarian || product.vegetarian) &&
        (!isGlutenFree || product.glutenFree) &&
        (!isOrganic || product.organic)
    ).sort((a, b) => a.price - b.price);
}

// Filters and sorts the product list based on given dietary restrictions and price
function filterAndSortProducts(products, restrictions) {
    const isVegetarian = restrictions.includes('vegetarian');
    const isGlutenFree = restrictions.includes('glutenFree');
    const isOrganic = restrictions.includes('organic');

    return products.filter(product => 
        (!isVegetarian || product.vegetarian) &&
        (!isGlutenFree || product.glutenFree) &&
        (!isOrganic || product.organic)
    ).sort((a, b) => a.price - b.price);
}

// Calculates the total price of selected products
function calculateTotalPrice(selectedProductNames, quantities) {
    return products.reduce((total, product) => 
        total + (selectedProductNames.includes(product.name) ? product.price * quantities[product.name] : 0), 0
    );
}