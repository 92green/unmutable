// @flow
import type {Node} from 'react';
import React from 'react';
import {useState} from 'react';

import {Box} from 'dcme-style/layout';
import {Flex} from 'dcme-style/layout';
import {Paper} from 'dcme-style';
import {Markdown} from 'dcme-style';
import {CodeHighlight} from 'dcme-style';
import {Code} from 'dcme-style/affordance';
import {Icon} from 'dcme-style/affordance';
import {Input} from 'dcme-style/affordance';
import {Link} from 'dcme-style/affordance';
import {Pre} from 'dcme-style/affordance';
import {Text} from 'dcme-style/affordance';

import pipe from 'unmutable/lib/pipe';
import pipeWith from 'unmutable/lib/pipeWith';
import map from 'unmutable/lib/map';
import filter from 'unmutable/lib/filter';
import update from 'unmutable/lib/update';

type ItemType = {
    name: string,
    description?: string,
    definition?: string,
    immutablejs?: boolean,
    types?: string[],
    example?: string
};

type ItemProps = {
    item: ItemType
};

const Item = (props: ItemProps) => {
    let {name, definition, description, immutablejs} = props.item;
    return <Paper bordered fadeUp p={3} mb={3}>
        <Box mb={3}>
            <Text textStyle="h3">{name}</Text>
        </Box>
        {!definition && !description &&
            <Text textStyle="disclaimer">Description coming soon</Text>
        }
        {definition &&
            <Box mb={3}>
                <Pre bounded>
                    <CodeHighlight language="flow">{definition}</CodeHighlight>
                </Pre>
            </Box>
        }
        {description &&
            <Text textStyle="small">
                <Markdown>{description}</Markdown>
            </Text>
        }
        {immutablejs &&
            <Box mt={-2}>
                <Text textStyle="disclaimer">Description from <Link color="copyLight" href="https://facebook.github.io/immutable-js/docs/" target="_blank">Immutable.js' docs</Link>.</Text>
            </Box>
        }
    </Paper>;
};

type SubSection = {
    title: string,
    items: ItemType[],
    description?: string
};

type Section = {
    title: string,
    items: SubSection[],
    description?: string
};

type Props = {
    data: Section[]
};

export const Api = (props: Props): Node => {
    let {data} = props;

    let [search, setSearch] = useState('');

    let sections = search
        ? pipeWith(
            data,
            map(
                update('items', pipe(
                    map(update(
                        'items',
                        filter(item => item.name.toLowerCase().indexOf(search.toLowerCase()) !== -1)
                    )),
                    filter(subsection => subsection.items.length > 0)
                ))
            ),
            filter(sections => sections.items.length > 0)
        )
        : data;

    return <Box>
        <Flex mb={3} justifyContent="flex-end">
            <Text as="div" textStyle="weak" mr={2}>
                <Icon icon="search" />
            </Text>
            <Input placeholder="Filter" value={search} onChange={(e) => setSearch(e.currentTarget.value)} />
        </Flex>
        {sections.map((section, key) => {
            let {title, items, description} = section;
            return <Box key={key}>
                {description &&
                    <>
                        <Box mb={2}>
                            <Text textStyle="s1">{title}</Text>
                        </Box>
                        <Box mb={2}>{description}</Box>
                    </>
                }
                {items.map((subsection, key) => {
                    let {title, items, description} = subsection;
                    return <Box key={key}>
                        <Paper pt="2.5rem" pl={3} pb={2} width={1} bg="bg" style={{position: "sticky", top: 0, zIndex: 2}}>
                            <Text textStyle="s1">{section.title} - {title}</Text>
                        </Paper>
                        {description &&
                            <Box mb={2}>{description}</Box>
                        }
                        {items.map((item, key) => {
                            return <Item item={item} key={key} />;
                        })}
                    </Box>;
                })}
            </Box>;
        })}
    </Box>;
};
