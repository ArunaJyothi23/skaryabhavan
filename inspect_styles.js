const fs = require('fs');

const html = fs.readFileSync('live_home.html', 'utf8');

// Check google fonts
const fonts = html.match(/fonts\.googleapis\.com\/css2\?[^"']+/g) || [];
console.log('Google Fonts loaded:', fonts);

// Check colors in style tags
const styles = html.match(/<style[^>]*>([\s\S]*?)<\/style>/gi) || [];
const combinedStyles = styles.join('\n');

const colors = combinedStyles.match(/#(?:[0-9a-fA-F]{3}){1,2}\b/g) || [];
const colorCounts = {};
colors.forEach(c => colorCounts[c.toLowerCase()] = (colorCounts[c.toLowerCase()] || 0) + 1);
const sortedColors = Object.entries(colorCounts).sort((a,b) => b[1] - a[1]);
console.log('Top colors used:', sortedColors.slice(0, 15));

// Check font-family declarations
const fontFamilies = combinedStyles.match(/font-family:[^;]+;/gi) || [];
console.log('Font families:', Array.from(new Set(fontFamilies)).slice(0, 10));
