// @flow
import React from 'react';
import {Box, CenteredLanding, Grid, GridItem, Link as HtmlLink, Image, Text, Typography, Wrapper} from 'dcme-style';
import Layout from '../layout/Layout';
import IndexMarkdown from './index.md';

export default () => <Layout>
    <Box modifier="invertedCopy invertedBackground">
        <Wrapper>
            <CenteredLanding
                modifier="heightHalf"
                top={() => <Text element="h1" modifier="sizeTera superDuper">unmutable</Text>}
                bottom={() => <Grid>
                    <GridItem modifier="8 padding">
                        <Text element="p" modifier="monospace margin">An immutable, functional data collection library for plain old Javascript.</Text>
                        <Text element="p" modifier="monospace"><HtmlLink href="https://github.com/blueflag/unmutable">github</HtmlLink> | <HtmlLink href="https://www.npmjs.com/package/unmutable">npm</HtmlLink></Text>
                    </GridItem>
                    <GridItem modifier="4 padding">
                        <Image modifier="center logo" src="" />
                    </GridItem>
                </Grid>}
            />
        </Wrapper>
    </Box>
    <Box modifier="paddingTopKilo">
        <Wrapper modifier="marginBottom">
            <Typography>
                <IndexMarkdown />
            </Typography>
        </Wrapper>
    </Box>
</Layout>;
