require('dotenv').config({ path: '.env.local' });
const { MongoClient } = require('mongodb');

function unescapeString(str) {
  if (typeof str !== 'string') return str;
  return str
    .replace(/\\r\\n/g, '\n')
    .replace(/\\n/g, '\n')
    .replace(/\\r/g, '\n');
}

async function fixDatabase() {
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  const db = client.db('tecunique');
  const all = await db.collection('case-studies').find({}).toArray();

  let updatedCount = 0;
  for (const cs of all) {
    let modified = false;

    if (cs.sections && Array.isArray(cs.sections)) {
      cs.sections = cs.sections.map(s => {
        if (s && typeof s.content === 'string') {
          const unescaped = unescapeString(s.content);
          if (unescaped !== s.content) {
            modified = true;
            return { ...s, content: unescaped };
          }
        }
        return s;
      });
    }

    if (cs.description && typeof cs.description === 'string') {
      const unescaped = unescapeString(cs.description);
      if (unescaped !== cs.description) {
        modified = true;
        cs.description = unescaped;
      }
    }

    if (cs.solution && typeof cs.solution === 'string') {
      const unescaped = unescapeString(cs.solution);
      if (unescaped !== cs.solution) {
        modified = true;
        cs.solution = unescaped;
      }
    }

    if (modified) {
      await db.collection('case-studies').updateOne(
        { _id: cs._id },
        { $set: { sections: cs.sections, description: cs.description, solution: cs.solution } }
      );
      console.log(`Updated case study: ${cs.id} (${cs.company})`);
      updatedCount++;
    }
  }

  console.log(`Database cleanup complete. ${updatedCount} documents updated.`);
  await client.close();
}

fixDatabase().catch(console.error);
