import React from 'react';
import {storiesOf} from '@storybook/react';

import AddList from '.';

storiesOf('organisms / AddList', module)
.add('example', () => {
    return (
        <AddList/>
    )
})