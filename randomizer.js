const randomWebsite = () => {
    let urls = [
        "home.html",
        'XHero.html',
        'index.html'
    ];
    
    let randomSite = Math.floor(Math.random() * urls.length);
    
    window.location = urls[randomSite];
}
