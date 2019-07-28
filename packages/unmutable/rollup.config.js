// @flow
import babel from 'rollup-plugin-babel';
import {terser} from 'rollup-plugin-terser';

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

export default [
    {
        input: 'index.js',
        output: {
            index: 'dist/unmutable.min.js',
            format: 'umd',
            name: 'unmutable',
            esModule: false
        },
        plugins,
        external
    },
    {
        input: 'index.js',
        output: {
            file: 'dist/cjs/index.js',
            format: 'cjs'
        },
        plugins,
        external
    },
    {
        input: 'index.js',
        output: {
            file: 'dist/esm/index.js',
            format: 'esm'
        },
        plugins,
        external
    }
];
