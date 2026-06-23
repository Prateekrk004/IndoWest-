import fs from 'fs';

function inspect(file) {
  const content = fs.readFileSync(file, 'utf8');
  console.log(`\n=================== INSPECT ${file} ===================`);
  
  // Find all ids
  const ids = [...content.matchAll(/id=["']([^"']+)["']/g)].map(m => m[1]);
  console.log('ID Attributes:', ids);
  
  // Find all buttons
  const buttons = [...content.matchAll(/<button[^>]*>([\s\S]*?)<\/button>/g)].map(m => m[1].replace(/<[^>]*>/g, '').trim());
  console.log('Buttons:', buttons.slice(0, 15));

  // Find scripts
  const scripts = [...content.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/g)].map(m => m[1].substring(0, 150) + '...');
  console.log(`Scripts Count: ${scripts.length}`);
  
  // Find tailwind classes
  const classes = [...content.matchAll(/class=["']([^"']+)["']/g)].map(m => m[1]);
  console.log(`Classes: found ${classes.length} entries`);
}

inspect('./downloaded_content_2.html');
inspect('./downloaded_content_3.html');
