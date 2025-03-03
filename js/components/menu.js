const allMenuItems = [
    {
        name: "Earthling Joe",
        image: "../images/tsp.jpg",
        description: "Our typical, down-to-Earth cup of coffee, sourced from the finest continents of Africa & Asia. Choice of roast and sweetening.",
        price: "3.25",
        featured: false
    },
    {
        name: "Quantum Espresso",
        image: "item/quantumespresso.jpg",
        description: "Espresso made with a blended superposition of dark-roasted beans, existing in multiple flavor states simultaneously until observed.",
        price: "4.50",
        featured: true
    },
    {
        name: "Nebula Latte",
        image: "item/quantumespresso.jpg",
        description: "Swirling clouds of steamed milk with colorful galaxy-inspired syrups of your choice in a rich espresso universe.",
        price: "5.75",
        featured: true
    },
    {
        name: "Android's Dream",
        image: "item/quantumespresso.jpg",
        description: "Matcha green tea infused with lavender and silver pearls, the perfect fuel for synthetic beings.",
        price: "6.25",
        featured: true
    },
    {
        name: "Nuclear Blend",
        image: "../images/tsp.jpg",
        description: "Medium-roast coffee with an extra kick of caffeine, vitamins, and enough nuclear energy to fuel an android's supercomputer brain.",
        price: "4.25",
        featured: false
    },
    {
        name: "Absolute Zero Brew",
        image: "../xxx",
        description: "Coffee beans of any roast, brewed in slower H2O molecules just before Earth rotates one time around it's axis.",
        price: "4.25",
        featured: false
    }
]

const featuredMenuGrid = document.getElementById("featured-menu-items");
const menuGrid = document.getElementById("full-menu-items");

function MenuItemList(appender, filter) {
    if (!appender) {
        return
    }
    filter.forEach(item => {
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

function MenuItemQuiz() {
    // Where the Coffee Quiz will take place!
}

document.addEventListener("DOMContentLoaded", () => {
    MenuItemList(featuredMenuGrid, allMenuItems.filter(item => item.featured));
    MenuItemList(menuGrid, allMenuItems);
});