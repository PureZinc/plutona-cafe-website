const head = document.getElementsByTagName("head")[0];


const cssFiles = [
    "global.css",
    "header.css",
    "footer.css",
    "hero.css",
    "menu.css",
    "popup.css"
]

const webDetails = {
    title: "Plutona Cafe",
}


function Head() {
    const metaCharset = document.createElement("meta");
    metaCharset.charset = "UTF-8";
    
    const metaViewport = document.createElement("meta");
    metaViewport.name = "viewport";
    metaViewport.content = "width=device-width, initial-scale=1.0";

    const title = document.createElement("title");
    title.textContent = webDetails.title;

    [metaCharset, metaViewport, title].forEach(html => head.appendChild(html));


    cssFiles.forEach(filepath => {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = `../css/${filepath}`;
        head.appendChild(link);
    })
}

class Loyalty {
    constructor() {
        this.loyaltyElements = document.getElementsByClassName("loyalty");
        this.messageElement = document.getElementById("loyalty-message");
        this.loyaltyValueElm = document.getElementById("loyalty-points");

        Array.from(this.loyaltyElements).forEach(element => {
            let extraClasses = Array.from(element.classList);

            // Make an eventListener for elements that cost loyalty points
            let spendClass = extraClasses.find(cls => cls.startsWith("loyalty-spend-"));
            if (spendClass) {
                let spendAmount = parseInt(spendClass.replace("loyalty-spend-", ""), 10);
                element.addEventListener("click", () => {
                    let message = this.spendLoyaltyPoints(spendAmount);
                    this.messageElement.innerText = message;
                })
            }

            // Make an eventListener for elements that add loyalty points
            let addClass = extraClasses.find(cls => cls.startsWith("loyalty-add-"));
            if (addClass) {
                let addAmount = parseInt(spendClass.replace("loyalty-add-", ""), 10);
                element.addEventListener("click", () => {
                    let message = this.addLoyaltyPoints(addAmount);
                    this.messageElement.innerText = message;
                })
            }

            this.updateLoyaltyDisplay();
        });
    }

    setLoyaltyPoints(val) {
        localStorage.setItem("loyaltyPoints", val);
        if (this.loyaltyValueElm) {
            this.loyaltyValueElm.innerText = String(val);
        }
        console.log(val);
    }

    getLoyaltyPoints() {
        if (!localStorage.getItem("loyaltyPoints")) {
            this.setLoyaltyPoints(0);
        }
        return parseInt(localStorage.getItem("loyaltyPoints")) || 0;
    }

    addLoyaltyPoints(points) {
        let currentPoints = this.getLoyaltyPoints();
        let newPoints = currentPoints + points;
        this.setLoyaltyPoints(newPoints);
        return `You earned ${points} points! Total: ${newPoints}`;
    }

    spendLoyaltyPoints(points) {
        let currentPoints = this.getLoyaltyPoints();
        if (currentPoints >= points) {
            this.setLoyaltyPoints(currentPoints - points);
            return `You spent ${points} points! Remaining: ${this.getLoyaltyPoints()}`;
        } else {
            return "Not enough points!";
        }
    }

    updateLoyaltyDisplay() {
        if (this.loyaltyValueElm) {
            this.loyaltyValueElm.innerText = String(this.getLoyaltyPoints());
        }
    }
}

Head();

