const MongoClient = require('mongodb').MongoClient;

const MONGO_URL = 'mongodb://localhost:27017';
const DB_NAME = 'homework';
const COLLECTIONS = {
    SHOP: 'shop',
};

const client = new MongoClient(MONGO_URL, { useUnifiedTopology: true });

module.exports = {
    async connect () {
        const connection = await client.connect();
        console.log('Connected to MongoDB');
        const db = connection.db(DB_NAME);
        this.shop = db.collection(COLLECTIONS.SHOP);
    },
    disconnect () {
        return client.close();
    },
};
