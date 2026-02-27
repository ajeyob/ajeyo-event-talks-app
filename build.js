
const fs = require('fs');
const path = require('path');

const distPath = path.join(__dirname, 'dist');
if (!fs.existsSync(distPath)) {
    fs.mkdirSync(distPath);
}

// Read template and asset files
const htmlTemplate = fs.readFileSync(path.join(__dirname, 'src', 'index.html'), 'utf-8');
const cssContent = fs.readFileSync(path.join(__dirname, 'src', 'style.css'), 'utf-8');
let jsContent = fs.readFileSync(path.join(__dirname, 'src', 'app.js'), 'utf-8');
const talksDataContent = fs.readFileSync(path.join(__dirname, 'data', 'talks.json'), 'utf-8');

// Inject talk data into the JavaScript
jsContent = jsContent.replace('// TALK_DATA_INJECT', `const eventData = ${talksDataContent}; const talks = eventData.talks;`);

// Inline CSS and JS into the HTML template
let finalHtml = htmlTemplate.replace('<!-- CSS_INLINE -->', `<style>${cssContent}</style>`);
finalHtml = finalHtml.replace('<!-- JS_INLINE -->', `<script>${jsContent}</script>`);


// Write the final serverless HTML file
fs.writeFileSync(path.join(distPath, 'index.html'), finalHtml);

console.log('Website successfully built into dist/index.html');
