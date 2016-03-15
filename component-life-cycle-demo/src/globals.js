window.highlight = (function() {
	let highlightIds = [];
	let highlightId;

	setInterval(function () {
		let el;
		if (highlightId) {
			el = document.getElementById(highlightId);
			el.className = el.className.replace('alert-success', 'alert-info');
			highlightId = null;
		}

		if (highlightIds.length > 0) {
			highlightId = highlightIds.shift();
			el = document.getElementById(highlightId);
			el.className = el.className.replace('alert-info', 'alert-success');
		}
	}, 200);

	return function (elementId) {
		console.log(elementId);
		highlightIds.push(elementId);
	}
})()