// @flow
import React from 'react';
import Page from 'component/Page';
import {H1} from 'dcme-style';

import {Box} from 'dcme-style/layout';
import {Flex} from 'dcme-style/layout';
import {TextWrapper} from 'dcme-style/layout';
import {styled} from 'dcme-style/core';

import {Icon} from 'dcme-style/affordance';
import {Link} from 'dcme-style/affordance';
import {Text} from 'dcme-style/affordance';
import {Pre} from 'dcme-style/affordance';
import {ContentNav} from 'dcme-style';
import {CodeHighlight} from 'dcme-style';

import {Api} from 'component/Api';
import {ApiData} from 'data/ApiData';
import Description from 'mdx/description.mdx';
import Description2 from 'mdx/description2.mdx';
import Description3 from 'mdx/description3.mdx';

const SuperDuper = styled(H1)`
    color: #000;
    line-height: 3rem;
    text-shadow: -2px 2px 0px #fb828f, -3px 3px 0px #e0ccd6;
    font-size: 2.8rem;

    @media (min-width: ${props => props.theme.breakpoints[1]}) {
        text-shadow: -3px 3px 0px #fb828f, -6px 6px 0px #e0ccd6;
        line-height: 4rem;
        font-size: 3.2rem;
    }

    @media (min-width: ${props => props.theme.breakpoints[2]}) {
        font-size: 4rem;
    }
`;

export default () => <Page>
    <ContentNav>
        <Box pt={5} pb={4}>
            <Text as="div" textStyle="monospace">
                <Flex alignItems="flex-end">
                    <Box mr={3}>
                        <SuperDuper>unmutable</SuperDuper>
                    </Box>
                    <Box mr={3}>
                        <Link href="https://www.npmjs.com/package/unmutable"><Icon icon="npm" /> npm</Link>
                    </Box>
                    <Box>
                        <Link href="https://github.com/92green/unmutable"><Icon icon="github" /> github</Link>
                    </Box>
                </Flex>
            </Text>
        </Box>
    </ContentNav>
    <ContentNav
        pb={6}
        pageNav={[
            '# Unmutable',
            'Installation',
            'Usage',
            'API documentation',
            'Inspiration',
            'Development'
        ]}
    >
        <TextWrapper>
            <Description />
        </TextWrapper>
        <Usage />
        <TextWrapper>
            <Description2 />
            <Api data={ApiData} />
            <Description3 />
        </TextWrapper>
    </ContentNav>
</Page>;

const USAGE_1 = `var data = [1,2,3];

let result = pipeWith(
    data,
    push(4),
    reverse(),
    map(num => num * 10)
);

// result is [40,30,20,10]
// wow!
`;

const USAGE_2 = `var data = {
    foo: 1,
    bar: null,
    baz: 3
};

var filterNulls = filter((val) => {
    return val === null;
});

let result = filterNulls(data);

// result is {foo: 1, baz: 3}
// golly!
`;

const USAGE_3 = `var data = [1,3,3,2,1];

let result = unique()(data);

// result is [1,3,2]
// yee!
`;

const Usage = () => {
    return <Flex display={['block','block','block','flex']}>
        <Box width={[1,1,1,1/3]} pr={[0,0,0,3]} mb={[3,3,3,0]}>
            <Box mb={3}>
                <Text as="div" textAlign="center" textStyle="em">Use it in a pipe!</Text>
            </Box>
            <Box mb={3}>
                <Pre bounded>
                    <CodeHighlight language="flow">{USAGE_1}</CodeHighlight>
                </Pre>
            </Box>
        </Box>
        <Box width={[1,1,1,1/3]} pr={[0,0,0,3]} mb={[3,3,3,0]}>
            <Box mb={3}>
                <Text as="div" textAlign="center" textStyle="em">Use it partially applied!</Text>
            </Box>
            <Box mb={3}>
                <Pre bounded>
                    <CodeHighlight language="flow">{USAGE_2}</CodeHighlight>
                </Pre>
            </Box>
        </Box>
        <Box width={[1,1,1,1/3]} mb={[3,3,3,0]}>
            <Box mb={3}>
                <Text as="div" textAlign="center" textStyle="em">Use it in one line!</Text>
            </Box>
            <Box mb={3}>
                <Pre bounded>
                    <CodeHighlight language="flow">{USAGE_3}</CodeHighlight>
                </Pre>
            </Box>
        </Box>
    </Flex>;
};
