new (function newBody() {
	this.act = function (tag, resolve, reject) {
	    let agent = this.agent;
		if (!tag) {
			tag = '<div>';
		}
		let body = $(tag);
		// bind agent-div
		agent.see('set', ['body', body]);
		body[0].agent = agent;
		agent.see('getNames').then(function (names) {
			body.addClass(names);
		});
		
		agent.see('reloadHtml').then(function () {
			resolve(body);
			agent.see('trigger', 'onLoad');
		});
		agent.see('reloadCss');
	};
})();