setTimeout(() => {
	var interval;
	var themecolor;
	var mtc = document.querySelector("meta[name=theme-color]");

	if (mtc === null) {
		console.log("theme-color absent");
	}
	else {
		console.log("theme-color present");
		interval = setInterval(() => {
			var mtc_fix = document.querySelector("meta[name=theme-color]");
			themecolor = mtc_fix.getAttribute("content");
			if (mtc_fix === null) {
				return;
			}
			if (themecolor != "#ffffff") {
				mtc_fix.setAttribute("content", "#ffffff");
			}
		}, 100);
	}
	setTimeout(() => {
		clearInterval(interval);
	}, 4500);
}, 0);