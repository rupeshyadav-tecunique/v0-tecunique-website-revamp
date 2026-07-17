const fs = require('fs');
const path = require('path');

const exactMatches = {
  // Gradients and orbs that the user already defined custom classes for
  'bg-gradient-to-tr from-blue-100 to-purple-100 opacity-50 blur-[80px] animate-blob': 'brand-orb-blue opacity-50 blur-[80px] animate-blob',
  'bg-gradient-to-br from-indigo-100 to-indigo-100 opacity-50 blur-[80px] animate-blob animation-delay-2000': 'brand-orb-indigo opacity-50 blur-[80px] animate-blob animation-delay-2000'
};

const regexMatches = {
  // Slate / Neutral palette
  'text-slate-900': 'text-foreground',
  'text-slate-800': 'text-[var(--neutral-slate-800)]',
  'text-slate-700': 'text-[var(--neutral-slate-700)]',
  'text-slate-600': 'text-muted-foreground',
  'text-slate-500': 'text-[var(--neutral-slate-500)]',
  'text-slate-400': 'text-[var(--neutral-slate-400)]',
  
  'bg-slate-900': 'bg-foreground',
  'bg-slate-800': 'bg-[var(--neutral-slate-800)]',
  'bg-slate-50': 'bg-[var(--neutral-slate-50)]',
  'bg-slate-100': 'bg-[var(--neutral-slate-100)]',
  'bg-slate-200': 'bg-[var(--neutral-slate-200)]',
  
  'border-slate-900': 'border-foreground',
  'border-slate-100': 'border-[var(--neutral-slate-100)]',
  'border-slate-200': 'border-[var(--neutral-slate-200)]',
  'border-slate-300': 'border-[var(--neutral-slate-300)]',

  // Blue / Primary palette
  'text-blue-900': 'text-brand-blue',
  'text-blue-800': 'text-brand-blue',
  'text-blue-700': 'text-[var(--brand-blue-hover)]',
  'text-blue-600': 'text-brand-blue',
  'text-blue-500': 'text-brand-blue',
  
  'bg-blue-50': 'bg-[var(--surface-blue)]',
  'bg-blue-100': 'bg-[var(--surface-blue-strong)]',
  'bg-blue-200': 'bg-[var(--surface-blue-strong)]',
  'bg-blue-500': 'bg-brand-blue',
  'bg-blue-600': 'bg-brand-blue',
  'bg-blue-700': 'bg-[var(--brand-blue-hover)]',
  
  'border-blue-50': 'border-[var(--surface-blue)]',
  'border-blue-100': 'border-[var(--surface-blue-strong)]',
  'border-blue-200': 'border-[var(--surface-blue-strong)]',
  'border-blue-500': 'border-brand-blue',
  'border-blue-600': 'border-brand-blue',

  // Rose/Orange to Lavender/Blue (from culture section etc)
  'bg-rose-50': 'bg-[var(--surface-lavender)]',
  'text-rose-600': 'text-brand-purple',
  'border-rose-100': 'border-[var(--surface-violet-strong)]',
  
  // Indigo / Purple mapping
  'text-indigo-900': 'text-brand-indigo',
  'text-indigo-600': 'text-brand-indigo',
  'text-indigo-500': 'text-brand-indigo',
  
  'bg-indigo-50': 'bg-[var(--surface-violet)]',
  'bg-indigo-100': 'bg-[var(--surface-violet-strong)]',
  'bg-indigo-500': 'bg-brand-indigo',
  'bg-indigo-600': 'bg-brand-indigo',
  
  'border-indigo-100': 'border-[var(--surface-violet-strong)]',
  'border-indigo-500': 'border-brand-indigo',
  
  'text-purple-600': 'text-brand-purple',
  'text-purple-500': 'text-brand-purple',
  'bg-purple-50': 'bg-[var(--surface-lavender)]',
  
  // Emerald / Green mapping
  'text-emerald-500': 'text-brand-cyan',
  'text-emerald-600': 'text-brand-cyan',
  'bg-emerald-50': 'bg-[var(--surface-sky)]',
};

function walk(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let changed = false;
      
      for (const [key, val] of Object.entries(exactMatches)) {
        if (content.includes(key)) {
          content = content.split(key).join(val);
          changed = true;
        }
      }

      for (const [key, val] of Object.entries(regexMatches)) {
        const regex = new RegExp(`(?<!-)\\b${key}(?:/([0-9]+))?\\b`, 'g');
        content = content.replace(regex, (match, opacity) => {
          changed = true;
          if (opacity && !val.includes('/')) return `${val}/${opacity}`;
          return val;
        });
      }

      // Special replacement for gradients (from-slate-200 -> from-[var(--neutral-slate-200)])
      content = content.replace(/(?<!-)\b(from|to|via)-(slate|blue|indigo|purple|emerald)-([0-9]{2,3})\b/g, (match, dir, color, weight) => {
        let mapped = '';
        if (color === 'slate') mapped = `[var(--neutral-slate-${weight})]`;
        else if (color === 'blue' && (weight === '500' || weight === '600')) mapped = 'brand-blue';
        else if (color === 'blue') mapped = `[var(--surface-blue${weight > 50 ? '-strong' : ''})]`;
        else mapped = match.substring(dir.length + 1); // fallback
        
        if (mapped === match.substring(dir.length + 1)) return match;
        
        changed = true;
        return `${dir}-${mapped}`;
      });

      if (changed) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Refactored palette in ${fullPath}`);
      }
    }
  }
}

walk('app');
walk('components');
console.log('Palette refactor complete.');
