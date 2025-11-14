// Callback-based fs: Tradinonal or old approach
const fs = require('fs');

fs.writeFile('example.txt', 'Hello Node.js File System!', (err) => {
  if (err) throw err;
  console.log('File written successfully.');

  fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log('File content:', data);
  });
});
