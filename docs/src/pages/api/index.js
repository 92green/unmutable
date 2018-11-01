// @flow
import React from 'react';
import ApiPage from '../../component/ApiPage';
import Markdown_API from '../../docs/api/API.md';
import Markdown_butLast from '../../docs/api/butLast.md';

const md = {
    _desc: Markdown_API,
    butLast: Markdown_butLast
};

const api = `
# Functions
butLast()
`;

export default () => <ApiPage
    api={api}
    md={md}
/>;
