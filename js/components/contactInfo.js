const contactItems = [
    {
        emoji: "📍",
        details: "42 Cosmic Rd, Kissimmee, Florida"
    },
    {
        emoji: "📡",
        details: "contact@plutonacafe.com"
    },
    {
        emoji: "📶",
        details: "+1-555-PLUTONA-42"
    },
    {
        emoji: "⏱️",
        details: "Open Daily: 07:00 - 23:00 Earth Standard Time"
    }
]

const formFields = [
    {
        label: "name",
        type: "text",
        id: "name",
        name: "name",
    },
    {
        label: "communication frequency (email)",
        type: "email",
        id: "email",
        name: "email",
    },
    {
        label: "message content",
        type: "textarea",
        id: "message",
        name: "message",
    }
];

const contactContainer = document.getElementById("contactContainer");

function ContactInfo() {
    const contactItemsDiv = document.createElement("div");
    contactItemsDiv.className = "contact-info"

    const infoHeader = document.createElement("h2");
    infoHeader.innerText = "contact details";
    infoHeader.className = "uppercase";
    const infoDetails = document.createElement("p");
    infoDetails.innerText = "We're always ready to receive your communications.";
    contactItemsDiv.append(infoHeader, infoDetails);

    contactItems.map(item => {
        const itemDiv = document.createElement("div");
        const emo = document.createElement("i");
        const det = document.createElement("span");
        emo.innerHTML = item.emoji;
        det.innerText = item.details;
        itemDiv.append(emo, det);
        contactItemsDiv.appendChild(itemDiv);
    })

    const contactFormDiv = document.createElement("div");
    const contactForm = document.createElement("form");
    contactForm.action = "#";
    contactForm.method = "POST";
    formFields.forEach(field => {
        const formGroup = document.createElement("div");
        formGroup.className = "form-group";

        const formLabel = document.createElement("label");
        formLabel.for = field.id;
        formLabel.className = "uppercase";
        formLabel.innerText = field.label;

        const formInput = field.type === "textarea" 
            ? document.createElement("textarea") 
            : document.createElement("input");

        formInput.id = field.id;
        formInput.name = field.name;

        if (field.type !== "textarea") {
            formInput.type = field.type;
        }
        
        formGroup.append(formLabel, formInput);
        contactForm.appendChild(formGroup);
    })
    contactFormDiv.appendChild(contactForm);

    contactContainer.append(contactItemsDiv, contactFormDiv);
}

document.addEventListener("DOMContentLoaded", () => {
    ContactInfo();
});
