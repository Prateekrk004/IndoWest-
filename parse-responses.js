import fs from 'fs';
import path from 'path';

const dir = './scraped-responses';
const files = fs.readdirSync(dir);

for (const file of files) {
  if (file.includes('batchexecute') && file.endsWith('.txt')) {
    const filePath = path.join(dir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    
    console.log('====================================');
    console.log('FILE:', file);
    console.log('Length:', content.length);
    
    // Look for strings containing code or large JSON payloads
    // Often double escaped or wrapped in arrays
    try {
      // Find JSON arrays
      const index = content.indexOf('[[');
      if (index !== -1) {
        console.log('Found structure array bracket at:', index);
        // Let's print the first 500 characters of the structure
        console.log('Snippet:', content.substring(index, index + 2000));
      } else {
        console.log('No structure found');
      }
    } catch (e) {
      console.error(e);
    }
  }
}
