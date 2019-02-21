// @flow
import React from 'react';
import Link from 'gatsby-link';
import SpruceClassName from 'react-spruce/lib/SpruceClassName';

type Props = {
    className?: string,
    modifier?: string,
    name?: string
};

export default ({className, modifier, name = "Link", ...props}: Props) => <Link {...props} className={SpruceClassName({className, modifier, name})} />;
