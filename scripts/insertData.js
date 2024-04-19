const MongoClient = require('mongodb').MongoClient;
const { list } = require('/Users/yidanxu/WebstormProjects/house/src/components/data/Data.js');
const uri = 'mongodb+srv://yidanx:921017Xyd@cluster0.u3sgxyy.mongodb.net/dataCollection?retryWrites=true&w=majority';
const dbName = 'dataCollection';

async function insertData(){
    const client = new MongoClient(uri, { useNewUrlParser: true,
        useUnifiedTopology: true });

    try {   
        await client.connect();
        console.log('Connected to MongoDB');
        const db = client.db(dbName);
        const collection = db.collection('data');

        
        const result = await collection.insertMany(list);
        console.log('Feature data inserted successfully');
        console.log(`${result.insertedCount} documents were inserted`);
    }catch(error){
        console.error('Error connecting to MongoDB:', error);
}finally{
    await client.close();
    console.log('Disconnected from MongoDB');
}   
}       
insertData();
