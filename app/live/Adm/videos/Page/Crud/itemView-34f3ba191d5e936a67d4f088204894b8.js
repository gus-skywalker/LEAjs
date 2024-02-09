new (function itemView () {
	this.act = function (bean, resolve, reject) {
	    let agent = this.agent;
		let html = '<tr class="item id' + bean.id + '">';
	    html += '\n\t<td class="id">' + bean['id'] + '</td>';
	    html += '\n\t<td class="titulo">' + bean['titulo'] + '</td>';
	    html += '\n\t<td class="arquivo">' + bean['arquivo'] + '</td>';
		html += '\n\t<td><button>Editar</button><button>Apagar</button></td>';
		html += '\n</tr>';
		resolve(html);
	};
})();