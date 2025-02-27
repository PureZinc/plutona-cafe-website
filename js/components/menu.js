const allMenuItems = [
    {
        name: "Quantum Espresso",
        image: "item/quantumespresso.jpg",
        description: "A superposition of dark-roasted beans existing in multiple flavor states simultaneously until observed.",
        price: "4.50",
        featured: true
    },
    {
        name: "Nebula Latte",
        image: "item/quantumespresso.jpg",
        description: "Swirling clouds of steamed milk with colorful galaxy-inspired syrups in a rich espresso universe.",
        price: "5.75",
        featured: true
    },
    {
        name: "Android's Dream",
        image: "item/quantumespresso.jpg",
        description: "Electric blue matcha infused with lavender and silver pearls, the perfect fuel for synthetic beings.",
        price: "6.25",
        featured: true
    }
]

const featuredMenuGrid = document.getElementById("featured-menu-items");
const menuGrid = document.getElementById("full-menu-items");

function MenuItemList(featured = false) {
    let allItems, appender;
    if (featured) {
        allItems = allMenuItems.filter(item => item.featured);
        appender = featuredMenuGrid;
    } else {
        allItems = allMenuItems;
        appender = menuGrid;
    }

    allItems.forEach(item => {
        const itemContainer = document.createElement("div");
        itemContainer.className = "menu-item";

        // Image
        const imageContainer = document.createElement("div");
        imageContainer.className = "menu-item-image";
        const image = document.createElement("img");
        image.src = `../images/${item.image}`;
        image.alt = item.name;
        imageContainer.appendChild(image);

        // Content
        const contentContainer = document.createElement("div");
        contentContainer.className = "menu-item-content";
        const contentHeader = document.createElement("h3");
        contentHeader.innerText = item.name;
        const contentDetails = document.createElement("p");
        contentDetails.innerText = item.description;
        const priceTag = document.createElement("span");
        priceTag.className = "menu-item-price";
        priceTag.innerText = `$${item.price}`;
        contentContainer.append(contentHeader, contentDetails, priceTag);

        // Append All
        itemContainer.append(imageContainer, contentContainer);
        appender.appendChild(itemContainer);
    })

}

document.addEventListener("DOMContentLoaded", () => {
    MenuItemList(true);
});