import React from 'react';
import {storiesOf} from '@storybook/react';

import ItemList from '.';

storiesOf('molecules / ItemList', module)
.add('example', () => {
    return (
        <ItemList todo="Buy Home" id="1"/>
    )
})