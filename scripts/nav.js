var button = document.getElementById("ham-button"),
	h = document.getElementsByClassName("container-for-option")[0];
if (button) {
	button.onclick = function () {
		
			h.classList.toggle("hero-nav-opt-none");
	
	}
} 
