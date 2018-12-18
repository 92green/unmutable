// @flow
let ListLibFiles = require('../../scripts/list-lib-files.js').default;

test(`Files should be importable from top level`, done => {
    ListLibFiles((files) => {
        files.forEach(file => {
            let fn = require(`../../${file}`);
            expect(typeof fn).toBe('function');
        });
        done();
    });
});
