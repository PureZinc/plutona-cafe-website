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
        this.header = header;
        this.details = content;
        this.overlay = document.getElementById("popupOverlay");
        this.container = null;
        this.timer = new PopupTimer(duration, () => this.close());

        this.renderElement();
    }

    renderElement() {
        this.container = document.createElement("div");
        this.container.className = "popup-container";
        this.container.id = "popupContainer";

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
        popupHeader.innerText = this.header;
        const popupDetails = document.createElement("p");
        popupDetails.innerText = this.details;
        popupContent.append(popupHeader, popupDetails);

        const popupTimerElm = document.createElement("div");
        popupTimerElm.id = "popupTimer";
        popupTimerElm.className = "popup-timer";

        const acceptButton = document.createElement("button");
        acceptButton.id = "acceptBtn";
        acceptButton.className = "cta-button";
        acceptButton.innerText = "Accept Offer";

        this.container.append(popupControlPanel, closeButton, popupContent, popupTimerElm, acceptButton);

        closeButton.addEventListener('click', () => this.close());
        acceptButton.addEventListener('click', () => this.handleAccept());
    }

    open() {
        this.renderElement();
        this.overlay.appendChild(this.container);
        this.overlay.style.display = 'flex';
        this.container.classList.add("open");
    }

    close() {
        if (this.container) {
            this.container.classList.replace("open", "close");
            this.overlay.removeChild(this.container);
            this.overlay.style.display = 'none';
            this.container = null;
        }
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
        if (window.scrollY > document.documentElement.scrollHeight * 0.17) {
            popup.open();
            window.removeEventListener('scroll', scrollHandler);
        }
    });
})