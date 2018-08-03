// @flow
module.exports = {
    preset: 'blueflag-test',
    collectCoverageFrom: [
        "src/**/*.{js,jsx}"
    ],
    coverageThreshold: {
        global: {
            "branches": 100,
            "functions": 100,
            "lines": 100,
            "statements": 0
        }
    },
    testMatch: ["**/__test__/**/*-test.js?(x)"],
    testURL: 'http://localhost',
    testEnvironment: "node"
};
