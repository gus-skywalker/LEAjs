new (function insert() {
	this.act = async function (bean, resolve, reject) {
        const {MongoClient} = await import('mongodb');
        let agent = this.agent;
        let collection = await agent.see('getCollection');
        let uri = 'mongodb://localhost:27017';
        let con  = await new MongoClient(uri).connect();
        let db = con.db('franco');
        let r = await db.collection(collection).insertOne(bean);
        resolve(r);
	};
})();