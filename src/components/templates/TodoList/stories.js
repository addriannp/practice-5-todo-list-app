import React from 'react';
import {storiesOf} from '@storybook/react';

import TodoList from '.';

storiesOf('templates / TodoList', module)
.add('example', () => {
    return (
        <TodoList/>
    )
})