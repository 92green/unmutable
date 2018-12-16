// @flow
import React from 'react';
import Layout from '../../layout/Layout';
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

export default () => <Layout>
    <ApiPage
        api={api}
        md={md}
    />
</Layout>;
