new (function addPalavra() {
	this.act = function (palavra, resolve, reject) {
		let main = document.querySelector('main');
		let template = document.querySelector('#carta');
		
        let carta = template.content.cloneNode(true);
        let h1 = carta.querySelector("h1");
        h1.textContent = palavra;
        
        main.appendChild(carta);
		resolve();
	};
})();