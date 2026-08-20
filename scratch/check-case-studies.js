require('dotenv').config({ path: '.env.local' });
const { MongoClient } = require('mongodb');

async function check() {
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  const db = client.db('tecunique');
  const all = await db.collection('case-studies').find({}).toArray();
  
  for (const cs of all) {
    console.log('ID:', cs.id, 'Company:', cs.company);
    console.log('--- Description:', JSON.stringify(cs.description));
    console.log('--- Solution:', JSON.stringify(cs.solution));
    console.log('--- Sections count:', cs.sections?.length);
    if (cs.sections) {
      cs.sections.forEach((s, idx) => {
        console.log(`    Section [${idx}] "${s.title}":`, JSON.stringify(s.content?.substring(0, 80)));
      });
    }
  }
  await client.close();
}
check().catch(console.error);
