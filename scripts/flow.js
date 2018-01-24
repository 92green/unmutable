const fs = require('fs-extra');
const globby = require('globby');
globby('src/**/*.js')
    .then(paths => paths.map(path => ([path, path.replace(/^src/, 'pa') + '.flow'])))
    .then((paths) => paths.forEach(([src, dest]) => fs.copySync(src, dest)));
