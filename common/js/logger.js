(function () {
	var consoleLog = console.log;
	var logger = document.getElementById('logger');
	console.log = function (message) {
		consoleLog(message);

		let log = '';
		if (typeof message == 'object') {
			log = '<pre>' + (JSON && JSON.stringify ? JSON.stringify(message) : message) + '</pre>';
		} else {
			log = message;
		}

		logger.innerHTML += `<div>${log}</div>`
	}
})();