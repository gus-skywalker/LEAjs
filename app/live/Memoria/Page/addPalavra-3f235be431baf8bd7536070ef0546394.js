new (function addPalavra() {
	this.act = function (palavra, resolve, reject) {
	    let agent = this.agent;
		let main = document.querySelector('main');
		let template = document.querySelector('#carta');
		
        let carta = template.content.cloneNode(true).children[0];
        let h1 = carta.querySelector("h1");
        h1.textContent = palavra;
        
		let cartas = document.querySelectorAll('article');
		let total = cartas.length  - 1;
        let coluna = total % 4 + 1;
        let linha = Math.floor(total / 4) + 1;
        carta.setAttribute('style', `grid-column: ${coluna}; grid-row: ${linha}`);
        main.appendChild(carta);
		resolve();
	};
})();