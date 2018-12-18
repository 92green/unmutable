var fs = require('fs');

module.exports = (callback) => fs.readdir('src', (err, files) => {
    callback(files.filter(file => file.endsWith(".js")));
});
