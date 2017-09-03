// @flow
/* eslint-disable no-unused-vars */

import type UnmutableWrapper from './src/UnmutableWrapper';
import type UnmutableMapWrapper from './src/UnmutableMapWrapper';
import type UnmutableListWrapper from './src/UnmutableListWrapper';
import type UnmutableObjectWrapper from './src/UnmutableObjectWrapper';
import type UnmutableArrayWrapper from './src/UnmutableArrayWrapper';

type UnmutableWrapperType = UnmutableWrapper|UnmutableMapWrapper|UnmutableListWrapper|UnmutableObjectWrapper|UnmutableArrayWrapper;

type Options = {
    methodConstructors?: Object
};
