new (function virarCarta() {
	this.act = function (carta, resolve, reject) {
		carta.classList.toggle('virada');
		let viradas = document.querySelectorAll('.virada');
console.log(viradas);
		let jogador = document.querySelector('#jogador1');
		switch (viradas.length) {
		    case 2:
    		    let carta1 = viradas[0].querySelector('h1').innerText;
    		    let carta2 = viradas[1].querySelector('h1').innerText;
    		    if (carta1 == carta2) {
    		        jogador.appendChild(viradas[0]);
    		        jogador.appendChild(viradas[1]);
    		    }
    		    break;
    		default:
	            for (let carta of viradas) {
                    carta.classList.remove('virada');
                }
            case 0:
            case 1:
		}
		let cartas = document.querySelectorAll('main article');
        if (cartas.length == 0) {
            agent.see('venceu');
        }

		resolve();
	};
})();