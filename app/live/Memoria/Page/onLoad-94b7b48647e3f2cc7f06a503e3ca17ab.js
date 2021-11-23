new (function onLoad() {
	this.act = function (args, resolve, reject) {
        class Palavra {
            constructor(chave, valor=chave) {
                this.chave = chave;
                this.valor = valor;
            }
            limpar() {
                this.valor = this.chave;
            }
            toString() {
                return this.chave + ', ' + this.valor;
            }
        }
        window.Palavra = Palavra;
		this.agent.see('novo');
		resolve();
	};
})();