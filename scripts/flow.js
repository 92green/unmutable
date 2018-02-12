const fs = require('fs-extra');
const globby = require('globby');
globby('src/**/*.js')
    .then(paths => paths.map(path => ([path, path.replace(/^src/, 'lib') + '.flow'])))
    .then((paths) => paths
        .filter(([src]) => src.indexOf("__test__") === -1)
        .forEach(([src, dest]) => fs.copySync(src, dest))
    );
