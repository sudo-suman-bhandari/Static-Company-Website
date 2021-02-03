// .............. Google Map API ..............

// Initialize and add the map
var map;
function initMap() {
    // Your location
    const loc = {lat: 27.706084, lng: 85.373824};
    // Centered map on location
    map = new google.maps.Map(document.getElementById('map'), {
        center: loc,
        zoom: 15
    });
    // The marker, positioned at location
    const marker = new google.maps.Marker({
        position: loc,
        map: map
    })
}

// .............. Smooth Scrolling ..............

$('#navbar a, #read').on('click', function(event) {
    if (this.hash !== '') {
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top - 100
            },
            800 //in milliseconds 
        );
    }
});

// .............. Navbar See-through for Scrolling ..............

window.addEventListener('scroll', function() {
    if (window.scrollY>100) {
        document.getElementById('navbar').style.opacity = 0.8;
    } else {
        document.getElementById('navbar').style.opacity = 1;
    }
});

