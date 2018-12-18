var fs = require('fs');

exports.default = (callback) => fs.readdir('src', (err, files) => {
    callback(files.filter(file => file.endsWith(".js")));
});
