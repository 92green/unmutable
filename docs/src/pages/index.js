// @flow
import React from 'react';
import {Box, CenteredLanding, Grid, GridItem, Image, Text, Wrapper} from 'dcme-style';
import Layout from '../layout/Layout';

export default () => <Layout>
    <Box modifier="invertedCopy invertedBackground">
        <Wrapper>
            <CenteredLanding
                modifier="heightHalf"
                top={() => <Text element="h1" modifier="sizeTera superDuper">dataparcels</Text>}
                bottom={() => <Grid>
                    <GridItem modifier="8 padding">
                        <Text element="p" modifier="monospace margin">A library for editing data structures that works really well with React.</Text>
                        <Text element="p" modifier="monospace"><a className="Link" href="https://github.com/blueflag/dataparcels">github</a></Text>
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
            Hi
        </Wrapper>
    </Box>
</Layout>;
