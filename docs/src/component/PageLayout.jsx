// @flow
import type {Node} from "react";
import React from "react";
import {Box, Grid, GridItem, Wrapper} from 'dcme-style';
import SiteNavigation from './SiteNavigation';

type Props = {
    content: () => Node,
    nav?: () => Node,
    modifier?: string
};

export default ({content, nav, modifier}: Props) => <Wrapper modifier={modifier}>
    <Grid>
        <GridItem modifier="9 padding">
            {content()}
        </GridItem>
        <GridItem modifier="3 padding">
            <Box modifier="paddingTopMega">
                <SiteNavigation />
            </Box>
            {nav && nav()}
        </GridItem>
    </Grid>
</Wrapper>;
