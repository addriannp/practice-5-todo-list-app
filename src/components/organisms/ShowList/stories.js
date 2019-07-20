import React from 'react';
import {storiesOf} from '@storybook/react';

import ShowList from '.';

storiesOf('organisms / ShowList', module)
.add('example', () => {
    return (
        <ShowList/>
    )
})