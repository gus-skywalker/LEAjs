new (function list() {
	this.act = async function (args, resolve, reject) {
        const {MongoClient} = await import('mongodb');
        let agent = this.agent;
    
        let collection = await agent.see('getCollection');
        let uri = 'mongodb://localhost:27017';
        let con  = await new MongoClient(uri).connect();
        let beans = await con.db('franco').collection(collection).find({}).toArray();
        resolve(beans);
	};
})();