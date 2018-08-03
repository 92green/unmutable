// @flow
module.exports = {
    preset: 'blueflag-test',
    collectCoverageFrom: [
        "src/**/*.{js,jsx}"
    ],
    testMatch: ["**/__test__/**/*-test.js?(x)"],
    testURL: 'http://localhost'
};
