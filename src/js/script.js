var isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (
			isMobile.Android()
			|| isMobile.BlackBerry()
			|| isMobile.iOS()
			|| isMobile.Opera()
			|| isMobile.Windows()
		);
	}
};

window.onload = function() {
	document.addEventListener('click', documentActions)
	//Actions (делегирование собитий click)
	function documentActions(e) {
		const targetElement = e.target;
		if(window.innerWidth > 768 && isMobile.any()) {
			if (targetElement.classList.contains('menu__arrow') || targetElement.classList.contains('menu__link')) {
				targetElement.closest('.menu__item').classList.toggle('_hover')
			}
	}
		if (targetElement.classList.contains('icon-search')) {
			document.querySelector('.search-form').classList.toggle('_active');
		} else if (!targetElement.closest('.search-form') && document.querySelector('.search-form._active')) {
			document.querySelector('.search-form').classList.remove('active');
		}
	}
}



