// Function to initialize tab content on window load
window.onload = function() { 
    initializeTabs();
    initializeProductCategoryDropdown();
};

function initializeProductCategoryDropdown() {
    document.getElementById("productCategory").addEventListener("change", filterProductsByCategoryAndRestrictions);
}




// Initializes the tab content by hiding all and showing the first tab
function initializeTabs() {
    let tabContent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    document.getElementById("Client").style.display = "block";
}

// Function to open a tab and display its content
function openInfo(event, tabName) {
    hideAllTabs();
    removeActiveClassFromTabs();
    updateBreadcrumbs(tabName);

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.className += " active";
}

// Update breadcrumbs based on active tab
function updateBreadcrumbs(activeTab) {
    let breadcrumbs = {
        'Client': document.getElementById('breadcrumb-client'),
        'Products': document.getElementById('breadcrumb-products'),
        'Cart': document.getElementById('breadcrumb-cart')
    };

    for (let tab in breadcrumbs) {
        if (breadcrumbs.hasOwnProperty(tab)) {
            if (tab === activeTab) {
                breadcrumbs[tab].className = "breadcrumb active";
            } else {
                breadcrumbs[tab].className = "breadcrumb";
            }
        }
    }
}

// Hides all tab content
function hideAllTabs() {
    let tabContent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
}

// Removes 'active' class from all tablinks
function removeActiveClassFromTabs() {
    let tabLinks = document.getElementsByClassName("tablinks");
    for (let i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }
}

// Populates a list of product choices based on restrictions
function populateListProductChoices(selectElementId) {
    let restrictionsForm = document.forms['restrictions'];
    let selectedRestrictions = Array.from(restrictionsForm.elements['restriction'])
                                    .filter(input => input.checked)
                                    .map(input => input.value);

    let productListContainer = document.getElementById(selectElementId);
    productListContainer.innerHTML = "";

    let filteredProducts = filterAndSortProducts(products, selectedRestrictions);

    for (let product of filteredProducts) {
        appendProductToContainer(productListContainer, product);
    }
}

// Appends a product as a checkbox with label to the container
function appendProductToContainer(container, product) {
    let productDiv = document.createElement("div");
    productDiv.className = "product-item";

    let img = document.createElement("img");
    img.src = product.image;
    img.alt = product.name;
    img.className = "product-image";
    productDiv.appendChild(img);

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "product";
    checkbox.value = product.name;
    container.appendChild(checkbox);

    let label = document.createElement('label');
    label.htmlFor = product.name;
    label.appendChild(document.createTextNode(product.name));
    container.appendChild(label);

    let ingredients = document.createElement('span');
    ingredients.innerHTML = " (Ingredients: " + product.ingredients.join(", ") + ")";
    container.appendChild(ingredients);

	let quantitySlider = document.createElement("input");
	quantitySlider.type = "range";
	quantitySlider.min = "1";
	quantitySlider.max = "10"; // Set max as per requirement
	quantitySlider.value = "1";
	quantitySlider.className = "product-quantity-slider";    
	quantitySlider.id = "slider-" + product.name.replace(/\s+/g, '-').toLowerCase();
    
	
    container.appendChild(productDiv);
    container.appendChild(quantitySlider);
    container.appendChild(document.createElement("br"));
}

// Function to handle selection of items and display them in the cart
function selectedItems() {
    let selectedProducts = document.getElementsByName("product");
    let chosenProducts = [];
    let chosenQuantities = {};
    let cart = document.getElementById('displayCart');
    cart.innerHTML = "";

    let paragraph = document.createElement("P");
    paragraph.innerHTML = "You selected : ";
    paragraph.appendChild(document.createElement("br"));

    for (let product of selectedProducts) { 
        if (product.checked) {
            let quantitySlider = document.getElementById("slider-" + product.value.replace(/\s+/g, '-').toLowerCase());
            let quantity = quantitySlider.value;

            paragraph.appendChild(document.createTextNode(product.value + " x" + quantity));
            paragraph.appendChild(document.createElement("br"));
            chosenProducts.push(product.value);
            chosenQuantities[product.value] = parseInt(quantity);
        }
    }

    cart.appendChild(paragraph);
    cart.appendChild(document.createTextNode("Total Price is " + calculateTotalPrice(chosenProducts, chosenQuantities) + "$"));
}
