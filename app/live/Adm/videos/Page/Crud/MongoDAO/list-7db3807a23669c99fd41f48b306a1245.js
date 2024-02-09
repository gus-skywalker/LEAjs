new (function list() {
	this.act = async function (args, resolve, reject) {
        const {MongoClient} = await import('mongodb');
        //let agent = this.agent;

        let uri = 'mongodb://localhost:27017';
        let client  = await new MongoClient(uri).connect();
        let beans = await client.db('franco').collection('videos').find();
        resolve(beans);
	};
})();