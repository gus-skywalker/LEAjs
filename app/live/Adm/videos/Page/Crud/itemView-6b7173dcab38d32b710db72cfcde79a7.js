new (function itemView () {
	this.act = function (bean, resolve, reject) {
	    let agent = this.agent;
		let html = '<tr class="item id' + bean.id + '">';
	    html += '\n\t<td>' + bean._id + '</td>';
	    html += '\n\t<td>' + bean.titulo + '</td>';
		html += '\n\t<td><button onclick="getAgent(this).see(\'edit\', ' + bean.id + ');">Editar</button>';
		html += '\n\t<button onclick="getAgent(this).see(\'delete\', ' + bean.id + ');">Apagar</button></td>';
		html += '\n</tr>';
		resolve(html);
	};
})();