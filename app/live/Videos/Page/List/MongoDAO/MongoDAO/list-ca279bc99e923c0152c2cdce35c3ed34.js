new (function list() {
	this.act = async function (args, resolve, reject) {
        const {MongoClient} = await import('mongodb');
        //let agent = this.agent;

        let uri = 'mongodb://localhost:27017';
        let con  = await new MongoClient(uri).connect();
        let db = con.db('franco');
        let beans = await db.collection('videos').find();
        resolve(beans);
	};
})();