// @flow
import React from 'react';
import {Box, CenteredLanding, Text} from 'dcme-style';
import Link from '../component/Link';

export default () => <Box>
    <CenteredLanding
        top={() => <Text element="h1" modifier="sizeTera center">404</Text>}
        bottom={() => <Text element="p" modifier="monospace center margin">
            There's nothing here. Try heading back to the <Link to="/">homepage</Link>.
        </Text>}
    />
</Box>;
