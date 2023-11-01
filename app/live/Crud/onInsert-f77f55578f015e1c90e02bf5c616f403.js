new (function onSubmit() {
	this.act = async function (form, resolve, reject) {
	    let agente = this.agent;
	    let id = form.id.value;
	    let acao; 
	    
		let bean = await agente.see('getBeanFromForm', form);
		const dados = new URLSearchParams(bean).toString();
        // const dados = new FormData(form);
		let url = await agente.see('insertUrl');
    	let r = await fetch(url, {
    		method: 'POST',
    		headers: {
    // 			'Content-Type': 'multipart/form-data'
    			'Content-Type': 'application/x-www-form-urlencoded'
    		},
    		body: dados
    	});
    		
		resolve(await r.text());
	};
})();