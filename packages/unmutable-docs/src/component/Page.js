// @flow
import type {Node} from 'react';

import React from 'react';
import Helmet from 'react-helmet';
import {Head} from 'dcme-style/theme';
import {Theme} from 'dcme-style/theme';
import {LightTheme} from 'dcme-style/theme';
import {Box} from 'dcme-style/layout';
import {mdxComponents} from 'dcme-style/core';
import {MDXProvider} from '@mdx-js/react';

type Props = {
    children: *
};

const theme = LightTheme({});

export default ({children}: Props): Node => <Box height="100%">
    <Helmet>
        <meta charSet="utf-8" />
        <title>Unmutable - An immutable, functional data collection library for plain old Javascript.</title>
        <meta name="description" content="Unmutable - An immutable, functional data collection library for plain old Javascript" />
    </Helmet>
    <Head />
    <MDXProvider components={mdxComponents}>
        <Theme theme={theme}>
            {children}
        </Theme>
    </MDXProvider>
</Box>;
