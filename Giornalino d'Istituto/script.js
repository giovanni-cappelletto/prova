const options = {
    draggable: true, 
    freeScrool: true,
    groupCells: 1,
    autoPlay: true,
    pauseAutoPlayOnHover: true,
    selectedAttraction: 0.01,
    friction: 0.5,
    initialIndex: 0,
    imagesLoaded: true,
    wrapAround: true,
}

if (matchMedia('screen and (min-width: 768px)').matches) {
    options.prevNextButtons = true
} else {
    options.prevNextButtons = false
}

const flkity = new Flickity('.main-gallery', options)
