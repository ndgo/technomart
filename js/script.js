var feedbackPopup = document.querySelector(".feedback");
var feedbackButton = document.querySelector(".company-feedback-btn");
var feedbackClose = document.querySelector(".feedback-close");
var feedbackCancel = document.querySelector(".feedback-cancel");

if (feedbackButton != null && feedbackClose != null && feedbackCancel != null) {
    feedbackButton.addEventListener("click", function (event) {
        event.preventDefault(event);
        feedbackPopup.classList.add("show-block");
    });

    feedbackClose.addEventListener("click", function (event) {
        event.preventDefault(event);
        feedbackPopup.classList.remove("show-block");
    });

    feedbackCancel.addEventListener("click", function (event) {
        event.preventDefault(event);
        feedbackPopup.classList.remove("show-block");
    });

    window.addEventListener("keydown", function (event) {
        if (event.keyCode == 27) {
            if (feedbackPopup.classList.contains("show-block")) {
                feedbackPopup.classList.remove("show-block");
            }
        }
    });
}

var buyItemButtons = document.querySelectorAll(".catalog-item-buy"), i;
var cartBlock = document.querySelector(".cart-notification");
var cartClose = document.querySelector(".cart-notification-close");
var cartCancel = document.querySelector(".cart-cancel-btn");

for (i = 0; i < buyItemButtons.length; ++i) {
	buyItemButtons[i].addEventListener("click", function (event) {
		event.preventDefault(event);
		cartBlock.classList.add("show-block");
	})
}

cartClose.addEventListener("click", function (event) {
	event.preventDefault(event);
	cartBlock.classList.remove("show-block");
});

cartCancel.addEventListener("click", function (event) {
	event.preventDefault(event);
	cartBlock.classList.remove("show-block");
});

window.addEventListener("keydown", function (event) {
    if (event.keyCode == 27) {
        if (cartBlock.classList.contains("show-block")) {
            cartBlock.classList.remove("show-block");
        }
    }
});

var mapBlock = document.querySelector(".map");
var mapLink = document.querySelector(".company-contacts-map");
var mapClose = document.querySelector(".map-close");

mapLink.addEventListener("click", function (event) {
	event.preventDefault(event);
	mapBlock.classList.add("show-block");
});

mapClose.addEventListener("click", function (event) {
	event.preventDefault(event);
	mapBlock.classList.remove("show-block");
});

window.addEventListener("keydown", function (event) {
    if (event.keyCode == 27) {
        if (mapBlock.classList.contains("show-block")) {
            mapBlock.classList.remove("show-block");
        }
    }
});

var serviceLinks = document.querySelectorAll(".service-list-column a");
var serviceBlocks = document.querySelectorAll(".service-details-block");
var j, h, k;

for (i = 0; i < serviceLinks.length; ++i) {
	serviceLinks[i].addEventListener("click", function (event) {
		event.preventDefault(event);
        for (j = 0; j < serviceLinks.length; ++j) {
            serviceLinks[j].classList.remove("service-list-active");        
        }
        for (h = 0; h < serviceLinks.length; ++h) {
            if (serviceLinks[h] == this) {
                serviceLinks[h].classList.add("service-list-active");
                for (k = 0; k < serviceBlocks.length; ++k) {
                    serviceBlocks[k].classList.remove("service-details-active");
                }
                serviceBlocks[h].classList.add("service-details-active");
            }
        }
	})
}

function initialize() {
    var x = 59.938969;
    var y = 30.323040;
    var mapOptions = {
        zoom: 17,
        center: new google.maps.LatLng(x, y),
        scrollwheel: false,
        disableDefaultUI: true
    }
    var map = new  google.maps.Map(
        document.querySelector(".map-script"),
        mapOptions
    );
    var myLatLng = new google.maps.LatLng(x, y);
    var beachMarker = new google.maps.Marker({
        position: myLatLng,
        map: map
    });
}
google.maps.event.addDomListener(mapLink, "click", initialize);
