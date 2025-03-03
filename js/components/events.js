const allEvents = [
    {
        name: "Planetary Event",
        image: "tsp",
        description: "A world wide celebration of the history of Astronomy, from Galileo to the Moon. From the Moon to Now!",
        date: "March 15, 2025",
        location: "https://zoom.org"
    },
    {
        name: "Coffeemania",
        image: "tsp",
        description: "A celebration of coffee shops around the world of any brands, including ours!",
        date: "March 27, 2025",
        location: "Denver, Colorado"
    },
]

const eventGrid = document.getElementById("event-items");

function EventItemList() {
    allEvents.forEach(item => {
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
        priceTag.innerText = `${item.date}`;
        contentContainer.append(contentHeader, contentDetails, priceTag);

        // Append All
        itemContainer.append(imageContainer, contentContainer);
        eventGrid.appendChild(itemContainer);
    })

}

document.addEventListener("DOMContentLoaded", () => {
    EventItemList();
});