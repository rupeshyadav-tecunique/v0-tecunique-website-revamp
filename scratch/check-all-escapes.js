require('dotenv').config({ path: '.env.local' });
const { MongoClient } = require('mongodb');

async function checkAll() {
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  const db = client.db('tecunique');
  const all = await db.collection('case-studies').find({}).toArray();

  for (const cs of all) {
    let hasEscaped = false;
    if (cs.sections) {
      cs.sections.forEach((s, idx) => {
        if (typeof s.content === 'string' && (s.content.includes('\\n') || s.content.includes('\\r'))) {
          console.log(`[FOUND] Case Study "${cs.id}" Section [${idx}] "${s.title}" has literal \\n!`);
          hasEscaped = true;
        }
      });
    }
    if (typeof cs.description === 'string' && cs.description.includes('\\n')) {
      console.log(`[FOUND] Case Study "${cs.id}" description has literal \\n!`);
      hasEscaped = true;
    }
  }
  await client.close();
}
checkAll().catch(console.error);
