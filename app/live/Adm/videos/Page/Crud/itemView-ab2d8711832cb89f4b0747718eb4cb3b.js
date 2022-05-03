new (function itemView () {
	this.act = function (bean, resolve, reject) {
	    let agent = this.agent;
		let html = '<tr class="item id' + bean.id + '">';
		for (let i in bean) {
		    html += '\n\t<td class="' + i + '">' + bean[i] + '</td>';
		}
		html += '\n\t<td><button>Editar</button><button>Apagar</button></td>';
		html += '\n</tr>';
		resolve(html);
	};
})();