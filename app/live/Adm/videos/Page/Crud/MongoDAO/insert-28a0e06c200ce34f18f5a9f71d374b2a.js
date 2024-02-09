new (function insert() {
	this.act = async function (bean, resolve, reject) {
        const {MongoClient} = await import('mongodb');

        let uri = 'mongodb://localhost:27017';
        let client  = await new MongoClient(uri).connect();
        let db = client.db('franco');
        let r = await db.collection('videos').insertOne(bean);
        resolve(r);
	};
})();