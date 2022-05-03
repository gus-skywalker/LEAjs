new (function itemView () {
	this.act = function (bean, resolve, reject) {
	    let agent = this.agent;
	    
		let html = '<div class="item id' + bean.id + '">';
		    html += '<h1>' + bean.titulo + '</h1>';
		    html += '<h1>' + bean.descricao + '</h1>';
		    html += '<h1>' + bean.url + '</h1>';
		    html += '<h2>' + bean.descricao + '</h1>';
		html += '\n</div>';
		resolve(html);
	};
})();