const footer = document.getElementsByTagName("footer")[0];

const navItems = [
    { text: 'Home Base', href: '../pages/home.html' },
    { text: 'Consumption Options', href: '../pages/menu.html' },
    { text: 'Historical Data', href: '#about' },
    { text: 'Scheduled Events', href: '#events' },
    { text: 'Communication', href: '#contact' }
];

const socialLinks = [
    {
        symbol: "TW",
        link: "#"
    },
    {
        symbol: "IG",
        link: "#"
    },
    {
        symbol: "FB",
        link: "#"
    }
];

function Footer() {
    const footerContainer = document.createElement('div');
    footerContainer.className = 'footer-container';
    
    const column1 = document.createElement('div');
    column1.className = 'footer-column';
    
    const heading1 = document.createElement("h3");
    heading1.className = "uppercase";
    heading1.textContent = "Plutona Cafe";
    
    const description = document.createElement('p');
    description.textContent = 'Where space exploration meets coffee culture in a unique interstellar experience.';
    
    const socialLinksDiv = document.createElement('div');
    socialLinksDiv.className = 'social-links';
    
    socialLinks.forEach(platform => {
        const link = document.createElement('a');
        link.href = platform.link;
        const span = document.createElement('span');
        span.textContent = platform.symbol;
        link.appendChild(span);
        socialLinksDiv.appendChild(link);
    });
    
    column1.appendChild(heading1);
    column1.appendChild(description);
    column1.appendChild(socialLinksDiv);
    
    // Second column - NAVIGATION
    const column2 = document.createElement('div');
    column2.className = 'footer-column';
    
    const heading2 = document.createElement('h3');
    heading2.className = "uppercase";
    heading2.textContent = 'navigation';
    
    const navList = document.createElement('ul');
    
    navItems.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = item.href;
        a.textContent = item.text;
        li.appendChild(a);
        navList.appendChild(li);
    });
    
    column2.appendChild(heading2);
    column2.appendChild(navList);
    
    // Third column - OPENING HOURS
    const column3 = document.createElement('div');
    column3.className = 'footer-column';
    
    const heading3 = document.createElement('h3');
    heading3.className = "uppercase";
    heading3.textContent = 'opening hours';
    
    const hoursList = document.createElement('ul');
    
    const hoursItems = [
        'Monday - Friday: 07:00 - 23:00',
        'Saturday: 08:00 - 00:00',
        'Sunday: 08:00 - 22:00',
        'Earth Standard Time'
    ];
    
    hoursItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        hoursList.appendChild(li);
    });
    
    column3.appendChild(heading3);
    column3.appendChild(hoursList);
    
    // Fourth column - NEWSLETTER
    const column4 = document.createElement('div');
    column4.className = 'footer-column';
    
    const heading4 = document.createElement('h3');
    heading4.className = "uppercase";
    heading4.textContent = 'newsletter';
    
    const newsletterText = document.createElement('p');
    newsletterText.textContent = 'Subscribe to receive updates and special offers.';
    
    const newsletterForm = document.createElement('form');
    
    const formGroup = document.createElement('div');
    formGroup.className = 'form-group';
    
    const input = document.createElement('input');
    input.type = 'email';
    input.placeholder = 'Your email here';
    
    const button = document.createElement('button');
    button.type = 'submit';
    button.className = 'cta-button';
    button.textContent = 'Subscribe';
    
    formGroup.appendChild(input);
    newsletterForm.appendChild(formGroup);
    newsletterForm.appendChild(button);
    
    column4.appendChild(heading4);
    column4.appendChild(newsletterText);
    column4.appendChild(newsletterForm);
    
    // Add all columns to the container
    footerContainer.appendChild(column1);
    footerContainer.appendChild(column2);
    footerContainer.appendChild(column3);
    footerContainer.appendChild(column4);
    
    // Create copyright section
    const copyright = document.createElement('div');
    copyright.className = 'copyright';
    
    const copyrightText = document.createElement('p');
    copyrightText.innerHTML = '&copy; 2025 Plutona Cafe. All rights reserved across the known universe.';
    
    copyright.appendChild(copyrightText);
    
    // Assemble the footer
    footer.appendChild(footerContainer);
    footer.appendChild(copyright);
    
    return footer;
}

Footer();
