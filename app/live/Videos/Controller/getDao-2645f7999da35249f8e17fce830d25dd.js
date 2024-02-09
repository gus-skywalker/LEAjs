new (function getDao() {
	this.act = function (name='', resolve, reject) {
		this.agent.see('getAgent', name + 'MongoDAO DAO').then(resolve);
	};
})();
