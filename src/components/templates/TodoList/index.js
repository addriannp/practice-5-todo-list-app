import React, { Component } from 'react';
import AddList from './../../organisms/AddList'
import ShowList from './../../organisms/ShowList'

export default class TodoList extends Component {
    render(){
        return(
            <div>
               <AddList/>
               <ShowList/>
            </div>
        )
    }
}