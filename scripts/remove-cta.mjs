import fs from 'fs';
import path from 'path';

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = path.resolve(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else {
            if (file.endsWith('.tsx')) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = walk('app/(site)');
let removedCount = 0;

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let modified = false;
    
    // Remove import
    if (content.includes('CTABanner')) {
        content = content.replace(/import\s*\{\s*CTABanner\s*\}\s*from\s*['"]@\/components\/ui\/cta-banner['"];?\r?\n?/g, '');
        
        // Remove the component usage which can be multiline
        // We use a regex that matches `<CTABanner` followed by any characters until `/>`
        content = content.replace(/\{?\/\*\s*CTA Banner\s*\*\/\}?\s*<CTABanner[\s\S]*?\/>\r?\n?/g, '');
        content = content.replace(/<CTABanner[\s\S]*?\/>\r?\n?/g, '');
        
        fs.writeFileSync(file, content);
        removedCount++;
        console.log('Removed from ' + file);
    }
});

console.log(`Removed CTABanner from ${removedCount} files.`);
