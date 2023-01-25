const isMobile = {
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

window.onload = function(){
	document.addEventListener('click', documentActions);
	function documentActions (e) {
		const targetElement = e.target;
		console.log(isMobile.any());
		if (window.innerWidth > 768 && isMobile.any()){
			if(targetElement.classList.contains('menu__arrow')){
				targetElement.closest('.menu__item').classList.toggle('_hover');
			}
		}
	}
}