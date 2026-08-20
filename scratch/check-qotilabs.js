require('dotenv').config({ path: '.env.local' });
const { MongoClient } = require('mongodb');

async function check() {
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  const db = client.db('tecunique');
  const qotilabs = await db.collection('case-studies').findOne({ id: 'qotilabs' });
  console.log(JSON.stringify(qotilabs, null, 2));
  await client.close();
}
check().catch(console.error);
