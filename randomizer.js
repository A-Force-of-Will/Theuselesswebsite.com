const randomWebsite = () => {
  let urls = [
    "Earthquake/home.html",
    "XHero/XHero.html",
    "breakGlass/index.html",
  ];

  let randomSite = Math.floor(Math.random() * urls.length);

  window.location = urls[randomSite];
};
