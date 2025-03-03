class Loyalty {
    loyaltyElements = document.getElementsByClassName("loyalty");
    messageElement = document.getElementById("loyalty-message");
    loyaltyValueElm = document.getElementById("loyalty-points");

    constructor() {
        Array.from(this.loyaltyElements).forEach(element => {
            let extraClasses = Array.from(element.classList);

            // Make an eventListener for elements that cost loyalty points
            let spendClass = extraClasses.find(cls => cls.startsWith("loyalty-spend-"));
            if (spendClass) {
                let spendAmount = parseInt(spendClass.replace("loyalty-spend-", ""), 10);
                element.addEventListener("onclick", () => {
                    let message = this.spendLoyaltyPoints(spendAmount);
                    this.messageElement.innerText = message;
                })
            }

            // Make an eventListener for elements that add loyalty points
            let addClass = extraClasses.find(cls => cls.startsWith("loyalty-add-"));
            if (addClass) {
                let addAmount = parseInt(spendClass.replace("loyalty-add-", ""), 10);
                element.addEventListener("onclick", () => {
                    let message = this.addLoyaltyPoints(addAmount);
                    this.messageElement.innerText = message;
                })
            }
        });
    }

    setLoyaltyPoints(val) {
        localStorage.setItem("loyaltyPoints", val);
        this.loyaltyValueElm.innerText = String.toString(val);
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
}

new Loyalty();
