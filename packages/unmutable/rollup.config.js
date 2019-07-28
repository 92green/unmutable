// @flow
import babel from 'rollup-plugin-babel';
import {terser} from 'rollup-plugin-terser';

const listLibFiles = require('./scripts/list-lib-files.js');

let plugins = [
    babel({
        exclude: 'node_modules/**',
        runtimeHelpers: true
    }),
    terser()
];

let external = [
    'fast-deep-equal',
    'is-plain-object',
    'lodash.range'
];

export default listLibFiles().then(files => {

    let input = {
        index: 'index.js'
    };

    files.forEach(file => {
        let name = file.replace('.js', '');
        input[name] = `src/${file}`;
    });

    return [
        {
            input,
            output: {
                dir: 'dist/cjs',
                format: 'cjs'
            },
            plugins,
            external
        },
        {
            input,
            output: {
                dir: 'dist/esm',
                format: 'esm'
            },
            plugins,
            external
        }
    ];
});
