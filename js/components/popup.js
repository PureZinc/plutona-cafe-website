class PopupTimer {
    constructor(duration = 60, onComplete = null) {
        this.duration = duration;
        this.timeRemaining = duration;
        this.onComplete = onComplete;
        this.intervalId = null;

        this.timerElement = document.getElementById('popupTimer');
    }

    representAsTime() {
        const hours = Math.floor(this.timeRemaining / (60*60))
        const minutes = Math.floor((this.timeRemaining / 60) % 60);
        const seconds = this.timeRemaining % 60;

        const convert = (time) => time.toString().padStart(2, '0');
        return `${convert(hours)}:${convert(minutes)}:${convert(seconds)}`
    }

    start() {
        this.intervalId = setInterval(() => {
            this.timeRemaining--;
            this.updateDisplay();

            if (this.timeRemaining <= 0) {
                this.stop();
                if (this.onComplete) this.onComplete();
            }
        }, 1000);
    }

    stop() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }
    }

    reset() {
        this.stop();
        this.timeRemaining = this.duration;
        this.updateDisplay();
    }

    updateDisplay() {
        this.timerElement.innerText = this.representAsTime();
    }
}

class Popup {
    constructor(header, content, duration = 60) {
        this.overlay = document.getElementById("popupOverlay");

        this.renderElement(header, content);
        
        this.container = document.getElementById("popupContainer");
        this.closeBtn = document.getElementById("popupClose");
        this.acceptBtn = document.getElementById("acceptBtn");
        this.timer = new PopupTimer(duration, () => this.close());

        this.setupEventListeners();
    }

    renderElement(header, details) {
        const popupContainer = document.createElement("div");
        popupContainer.className = "popup-container";
        popupContainer.id = "popupContainer";

        const popupControlPanel = document.createElement("div");
        ["green", "red", "yellow"].forEach(color => {
            const panel = document.createElement("div");
            panel.className = `panel-light ${color}`;
            popupControlPanel.appendChild(panel);
        })

        const closeButton = document.createElement("span");
        closeButton.className = "popup-close";
        closeButton.id = "popupClose";
        closeButton.innerHTML = "&times;";

        const popupContent = document.createElement("div");
        popupContent.className = "popup-content";
        const popupHeader = document.createElement("h3");
        popupHeader.innerText = header;
        const popupDetails = document.createElement("p");
        popupDetails.innerText = details;
        popupContent.append(popupHeader, popupDetails);

        const popupTimerElm = document.createElement("div");
        popupTimerElm.id = "popupTimer";
        popupTimerElm.className = "popup-timer";

        const acceptButton = document.createElement("button");
        acceptButton.id = "acceptBtn";
        acceptButton.className = "cta-button";
        acceptButton.innerText = "Accept Offer";

        popupContainer.append(popupControlPanel, closeButton, popupContent, popupTimerElm, acceptButton);
        this.overlay.appendChild(popupContainer);
    }

    setupEventListeners() {
        this.closeBtn.addEventListener('click', () => this.close());
        this.acceptBtn.addEventListener('click', () => this.handleAccept());
    }

    open() {
        this.overlay.style.display = 'flex';
        this.container.classList.add("open");
        this.timer.reset();
        this.timer.start();
    }

    close() {
        this.overlay.style.display = 'none';
        this.timer.stop();
    }

    handleAccept() {
        alert('Mission Accepted!');
        this.container.classList.replace("open", "close");
        setTimeout(() => {
            this.close();
        }, 500)
    }
}


document.addEventListener("DOMContentLoaded", () => {
    const popup = new Popup(
        "We Invite you on a Mission!",
        "Our galaxy's best offer is ending soon! With 30% off ALL beverages & a ticket to outer space in 2050!",
        6997
    );

    window.addEventListener('scroll', function scrollHandler() {
        if (window.scrollY > document.documentElement.scrollHeight * 0.15) {
            popup.open();
            window.removeEventListener('scroll', scrollHandler);
        }
    });
})