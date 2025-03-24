fetch('config.json')
    .then(response => response.json())
    .then(config => {
        window.$crisp = [];
        window.CRISP_WEBSITE_ID = config.CRISP_WEBSITE_ID;
        
        let script = document.createElement("script");
        script.src = "https://client.crisp.chat/l.js";
        script.async = 1;
        document.head.appendChild(script);
    })
    .catch(error => console.error("Error loading Crisp configuration:", error));
