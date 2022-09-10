new class init {
	async act(args, resolve, reject) {
		var agent = this.agent;
		var name = (await agent.see('getNames')).split(' ')[1];
		var width = 50;
		var height = 50;
		var x = parseInt(Math.random()*100);
		var y = parseInt(Math.random()*100);
		agent.body = $('#' + name);
		if (agent.body.length == 0) {
            agent.see('study', 'click');
		    agent.body = $('<canvas class="jack" id="' + name + '" width="' + width + '" height="' + height + '" style="top: ' + y + '%; left: ' + x + '%;" />').appendTo('main');
		    var canvas = agent.body[0];
		    canvas.agent = agent;
		    
            var ctx=canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(0,0);
            ctx.lineTo(50,50);
            ctx.stroke();
            ctx.moveTo(0,50);
            ctx.lineTo(50,0);
            ctx.stroke();
            
		}
        agent.body.css('top', y + '%');
        agent.body.css('left', x + '%');
		agent.body.unbind();
		resolve();
	}
}();
