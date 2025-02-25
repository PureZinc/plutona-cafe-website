const header = document.getElementsByTagName("header")[0];

const menuItems = [
  { text: "Home", href: "#home" },
  { text: "Menu", href: "#menu" },
  { text: "About Us", href: "#about" },
  { text: "Events", href: "#events" },
  { text: "Contact", href: "#contact" },
];

function Header(links) {
  const headerContainer = document.createElement("div");
  headerContainer.className = "header-container";

  const logoDiv = document.createElement("div");
  logoDiv.className = "logo";

  const logoH1 = document.createElement("h1");
  logoH1.textContent = "PLUTONA ";

  const logoSpan = document.createElement("span");
  logoSpan.textContent = "CAFE";

  logoH1.appendChild(logoSpan);

  logoDiv.appendChild(logoH1);

  const nav = document.createElement("nav");
  const navUl = document.createElement("ul");

  links.forEach((item) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.textContent = item.text;
    a.href = item.href;
    li.appendChild(a);
    navUl.appendChild(li);
  });

  nav.appendChild(navUl);

  headerContainer.appendChild(logoDiv);
  headerContainer.appendChild(nav);

  return headerContainer;
}


// Append header container to header
header.appendChild(Header(menuItems));
