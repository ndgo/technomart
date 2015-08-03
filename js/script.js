var feedbackPopup = document.querySelector(".feedback");
var feedbackButton = document.querySelector(".company-feedback-btn");
var feedbackClose = document.querySelector(".feedback-close");
var feedbackCancel = document.querySelector(".feedback-cancel");

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

var buyItemButtons = document.querySelectorAll('.catalog-item-buy'), i;
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