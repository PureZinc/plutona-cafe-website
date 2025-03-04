const head = document.getElementsByTagName("head")[0];


const cssFiles = [
    "global.css",
    "header.css",
    "footer.css",
    "hero.css",
    "menu.css",
    "events.css",
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

Head();

