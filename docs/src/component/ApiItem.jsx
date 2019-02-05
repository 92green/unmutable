// @flow
import type {Node} from 'react';

import React from 'react';
import ReactMarkdown from 'react-markdown';
import {Box} from 'dcme-style';
import {Link} from 'dcme-style';
import {Message} from 'dcme-style';
import {Text} from 'dcme-style';
import {Typography} from 'dcme-style';

import Code from './Code';

import interpose from 'unmutable/lib/interpose';
import map from 'unmutable/lib/map';
import pipeWith from 'unmutable/lib/pipeWith';

type Props = {
    aliases?: string[],
    description?: string,
    definition?: string,
    example?: string,
    note?: string
};

const getSimpleName = (name: string): string => name.replace("()","");

export default (props: Props): Node => {
    let {
        aliases,
        description,
        definition,
        example,
        note
    } = props;

    let aliasesElements = aliases
        ? pipeWith(
            aliases,
            map((alias) => {
                let simpleName = getSimpleName(alias);
                return <Text modifier="weightKilo">{simpleName}</Text>;
            }),
            interpose(", ")
        )
        : null;

    return <Typography>
        {definition &&
            <Code language="flow">{definition}</Code>
        }
        {description
            ? <ReactMarkdown source={description} />
            : <Text element="p" modifier="weightMilli sizeMilli">No docs here yet! Try checking <Link href="https://facebook.github.io/immutable-js/docs/">Immutable.js' docs</Link>, if they have a matching function name then Unmutable's function will work the same way.</Text>
        }
        {note &&
            <Box modifier="margin">
                <Message>
                    {note}
                </Message>
            </Box>
        }
        {example &&
            <Code language="js">{example}</Code>
        }
        {aliasesElements &&
            <Text element="p">Aliases: {aliasesElements}</Text>
        }
    </Typography>;
};


