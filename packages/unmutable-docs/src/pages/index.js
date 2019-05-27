// @flow
import React from 'react';

import {DocsHeader} from 'dcme-style';
import {Image} from 'dcme-style';
import {Link as HtmlLink} from 'dcme-style';
import {Text} from 'dcme-style';

import {Link} from 'dcme-gatsby';
import ContentNav from '../shape/ContentNav';
import Layout from '../layout/Layout';
import IndexMarkdown from './index.mdx';
import Logo from 'assets/unmutable-icon.gif';

export default () => <Layout>
    <DocsHeader
        title={() => <Text element="h1" modifier="sizeTera superDuper margin">unmutable</Text>}
        description={() => "An immutable, functional data collection library for plain old Javascript."}
        links={() => <Text><HtmlLink href="https://github.com/blueflag/unmutable">github</HtmlLink> | <HtmlLink href="https://www.npmjs.com/package/unmutable">npm</HtmlLink> | <Link to="/api">api documentation</Link></Text>}
        logo={Logo}
    />
    <ContentNav
        content={() => <IndexMarkdown />}
        pageNav={[
            'What is it?',
            'Examples',
            'Getting Started',
            'API Summary',
            'Inspiration'
        ]}
    />
</Layout>;
