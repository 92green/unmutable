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
import {ContentNav} from 'dcme-style';

import {Api} from 'component/Api';
import {ApiData} from 'data/ApiData';
import Description from 'mdx/description.mdx';
import Description2 from 'mdx/description2.mdx';
import Description3 from 'mdx/description3.mdx';
import Usage1 from 'mdx/usage1.mdx';
import Usage2 from 'mdx/usage2.mdx';
import Usage3 from 'mdx/usage3.mdx';

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

const HeaderWrapper = styled.nav`
    @media (min-width: ${props => props.theme.breakpoints[2]}) {
        padding-left: ${props => props.theme.widths.nav};
    }
`;

export default () => <Page>
    <HeaderWrapper>
        <Box px={3} pt={5} pb={4}>
            <Text as="div" textStyle="monospace">
                <Flex alignItems="flex-end" flexWrap="wrap">
                    <Box mr={3}>
                        <SuperDuper>unmutable</SuperDuper>
                    </Box>
                    <Flex alignItems="flex-end" pt={2}>
                        <Box mr={3}>
                            <Link href="https://www.npmjs.com/package/unmutable"><Icon icon="npm" /> npm</Link>
                        </Box>
                        <Box>
                            <Link href="https://github.com/92green/unmutable"><Icon icon="github" /> github</Link>
                        </Box>
                    </Flex>
                </Flex>
            </Text>
        </Box>
    </HeaderWrapper>
    <ContentNav
        pageTop
        pageBottom
        mdxHeading
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

const Usage = () => {
    return <Flex display={['block','block','block','flex']}>
        <Box width={[1,1,1,1/3]} pr={[0,0,0,3]} mb={[3,3,3,0]}>
            <Box mb={3}>
                <Text as="div" textAlign="center" textStyle="em">Use it in a pipe!</Text>
            </Box>
            <Box mb={3}>
                <Usage1 />
            </Box>
        </Box>
        <Box width={[1,1,1,1/3]} pr={[0,0,0,3]} mb={[3,3,3,0]}>
            <Box mb={3}>
                <Text as="div" textAlign="center" textStyle="em">Use it partially applied!</Text>
            </Box>
            <Box mb={3}>
                <Usage2 />
            </Box>
        </Box>
        <Box width={[1,1,1,1/3]} mb={[3,3,3,0]}>
            <Box mb={3}>
                <Text as="div" textAlign="center" textStyle="em">Use it in one line!</Text>
            </Box>
            <Box mb={3}>
                <Usage3 />
            </Box>
        </Box>
    </Flex>;
};
