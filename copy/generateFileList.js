const fs = require('fs');
const path = require('path');

const folderPath = path.join(__dirname, 'img');
const files = fs.readdirSync(folderPath);

const formattedFiles = files.map(file => `'img/${file}'`).join(',\n');
console.log(formattedFiles);