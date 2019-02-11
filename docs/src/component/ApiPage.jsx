// @flow
import type {ComponentType} from 'react';
import type {Node} from 'react';

import React from 'react';
import {Fragment} from 'react';

import {Box} from 'dcme-style';
import {NavigationList} from 'dcme-style';
import {NavigationListItem} from 'dcme-style';
import {Text} from 'dcme-style';

import Link from './Link';
import PageLayout from './PageLayout';

import filter from 'unmutable/lib/filter';
import flatMap from 'unmutable/lib/flatMap';
import identity from 'unmutable/lib/identity';
import map from 'unmutable/lib/map';
import pipe from 'unmutable/lib/pipe';
import pipeWith from 'unmutable/lib/pipeWith';

type Item = {
    name: string,
    description?: Node,
    renderWith: ComponentType<*>
};

type Section = {
    title?: string,
    description?: Node,
    items: Array<Item|Section>
};

type Props = {
    after?: Node,
    before?: Node,
    sections: Section[],
    name?: string
};

const getSimpleName = (name: string): string => name.replace("()","");

const renderNavigation = map((section: Section, key: number) => {

    let renderList = map((itemOrSection: Item|Section, key: number): Node => {
        if(itemOrSection.items) {
            return <NavigationListItem key={key}>
                <NavigationList modifier="margin">
                    {section.title && <NavigationListItem>{itemOrSection.title}</NavigationListItem>}
                    {renderList(itemOrSection.items)}
                </NavigationList>
            </NavigationListItem>;
        }

        let simpleName = getSimpleName(itemOrSection.name);
        return <NavigationListItem key={key}>
            <a className="Link" href={`#${simpleName}`}>{simpleName}</a>
        </NavigationListItem>;
    });

    let links = renderList(section.items);

    return <NavigationList modifier="margin" key={key}>
        {section.title && <NavigationListItem>{section.title}</NavigationListItem>}
        {links}
    </NavigationList>;
});

const sizes = ["Mega", "Kilo", "Hecto"];

const renderContentNodes = (depth = 0) => flatMap((itemOrSection: Item|Section): Node[] => {
    let {
        items,
        name,
        renderWith: RenderWith = ({description}) => description,
        title
    } = itemOrSection;

    if(items) {
        let elements = [];
        if(title) {
            let anchor = title
                .toLowerCase()
                .replace(/\s+/g, "_");

            let size = sizes[depth];

            elements.push(
                <Box>
                    <a name={anchor} />
                    <Text element="h2" modifier={`size${size} margin${size} weightMicro`}>{title}</Text>
                </Box>
            );
        }
        return elements.concat(
            renderContentNodes(depth + 1)(items)
        );
    }

    let simpleName = getSimpleName(name);
    return [
        <Box modifier="marginBottomGiga">
            <a name={simpleName} />
            <Text element="h3" modifier="sizeKilo marginKilo">{name}</Text>
            <RenderWith {...itemOrSection} />
        </Box>
    ];
});

const renderContent = pipe(
    renderContentNodes(),
    filter(identity()),
    map((element, key) => <Box key={key}>{element}</Box>)
);

const renderExtra = (content) => content && <Box modifier="marginBottomGiga">{content}</Box>;

export default ({after, before, sections, name}: Props) => {
    return <PageLayout
        modifier="marginBottom"
        content={() => <Box>
            {renderExtra(before)}
            {renderContent(sections)}
            {renderExtra(after)}
        </Box>}
        nav={() => <Fragment>
            <NavigationList modifier="margin">
                <NavigationListItem><Link to="/api">Api</Link></NavigationListItem>
            </NavigationList>
            {name &&
                <NavigationList modifier="margin">
                    <NavigationListItem>{name}</NavigationListItem>
                </NavigationList>
            }
            {renderNavigation(sections)}
        </Fragment>}
    />;
};
