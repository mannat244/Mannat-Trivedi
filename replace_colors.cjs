const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;
  
  // Replace amber colors with zinc equivalents for a slick muted look
  content = content.replace(/text-amber-400/g, 'text-zinc-300');
  content = content.replace(/text-amber-500/g, 'text-zinc-400');
  content = content.replace(/text-amber-300/g, 'text-zinc-200');
  content = content.replace(/bg-amber-400/g, 'bg-zinc-300');
  content = content.replace(/bg-amber-500/g, 'bg-zinc-400');
  content = content.replace(/bg-amber-300/g, 'bg-zinc-200');
  content = content.replace(/border-amber-400/g, 'border-zinc-300');
  content = content.replace(/border-amber-500/g, 'border-zinc-400');
  content = content.replace(/from-amber-400/g, 'from-zinc-300');
  content = content.replace(/from-amber-500/g, 'from-zinc-400');
  content = content.replace(/to-amber-400/g, 'to-zinc-300');
  content = content.replace(/to-amber-300/g, 'to-zinc-200');
  content = content.replace(/focus:border-amber-400/g, 'focus:border-zinc-300');
  content = content.replace(/hover:border-amber-400/g, 'hover:border-zinc-300');
  content = content.replace(/hover:text-amber-400/g, 'hover:text-white');
  content = content.replace(/hover:bg-amber-300/g, 'hover:bg-white');
  content = content.replace(/bg-dot-thick-amber-500/g, 'bg-dot-thick-zinc-400');
  
  // Replace hex codes
  content = content.replace(/#fbbf24/g, '#d4d4d8'); // Tailwind zinc-300
  
  if (original !== content) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filePath}`);
  }
}

function walkDir(dir) {
  fs.readdirSync(dir).forEach(file => {
    let fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.css')) {
      replaceInFile(fullPath);
    }
  });
}

walkDir(path.join(__dirname, 'src'));
console.log('Replacement complete.');
