const listLibFiles = require('./list-lib-files.js').default;

const gitignore = `
# Config Files
**/.idea/tasks.xml
**/.idea/workspace.xml
.DS_Store
.env
.nyc_output

# Folders
coverage
flow-coverage
dist
lib
node_modules
*.log
docs/.cache
docs/public
`;

var fs = require('fs');

listLibFiles((files) => {
    let file = gitignore + "\n" + files.join("\n");
    fs.writeFile(".gitignore", file, (err) => {
        if(err) {
            return console.log(err); /* eslint-disable-line */
        }
        console.log("Gitignore updated."); /* eslint-disable-line */
    });
});
