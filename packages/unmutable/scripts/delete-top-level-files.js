var fs = require('fs');

var shouldNotDelete = ["index.js", "jest.config.js"];

fs.readdir('.', (err, files) => {
    files
        .filter(file => file.endsWith(".js") && !shouldNotDelete.includes(file))
        .forEach(file => fs.unlinkSync(file));
});
