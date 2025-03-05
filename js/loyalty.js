class LoyaltyPoints {
    constructor() {
        this.points = this.getPoints();
    }

    getPoints() {
        let points = localStorage.getItem("loyaltyPoints");
        if (!points) {
            localStorage.setItem("loyaltyPoints", 0);
            return 0;
        }
        return parseInt(points, 10);
    }

    setPoints() {
        localStorage.setItem("loyaltyPoints", this.points);
    }

    addPoints(val) {
        this.points += val;
        this.setPoints();
        this.sendMessage(`Congratz! You just got ${val} points. You now have ${this.points} loyalty points!`)
    }

    removePoints(val) {
        if (val > this.points) {
            this.sendMessage("You don't have enough loyalty points for this transaction!")
        } else {
            this.points -= val;
            this.setPoints();
            this.sendMessage(`Congratz! You just spent ${val} points. You now have ${this.points} loyalty points!`)
        }
    }

    sendMessage(message) {
        alert(message);
    }
}

function claimLoyaltyPoints(loyaltyPoints, pointGain) {
    const loyaltyDiv = document.getElementById("claimLoyaltyPoints");

    if (!loyaltyDiv) return;

    const claimPoints = document.createElement("button");
    claimPoints.className = "cta-button";
    claimPoints.innerText = `Claim your ${pointGain} points here!`
    claimPoints.addEventListener("click", () => loyaltyPoints.addPoints(pointGain));

    loyaltyDiv.appendChild(claimPoints);
}

document.addEventListener("DOMContentLoaded", () => {
    const loyalty = new LoyaltyPoints();
    claimLoyaltyPoints(loyalty, 50);
})