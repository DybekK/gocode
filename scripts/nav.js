var button = document.getElementById("ham-button"),
	h = document.getElementsByClassName("hero-nav-opt");
if (button) {
	button.onclick = function () {
		for (var i = 0; i < h.length; i++) {
			h[i].classList.toggle("hero-nav-opt-none");
		};
	}
} 
