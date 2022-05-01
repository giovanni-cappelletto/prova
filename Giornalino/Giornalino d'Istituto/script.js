const flkity = new Flickity('.main-gallery', {
    draggable: true, 
    freeScrool: true,
    wrapAround: true,
    groupCells: 1,
    autoPlay: true,
    pauseAutoPlayOnHover: true,
    selectedAttraction: 0.01,
    friction: 0.5,
    initialIndex: 0,
    imagesLoaded: true
})