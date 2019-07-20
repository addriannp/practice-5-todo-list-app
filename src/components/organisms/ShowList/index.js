import React, { Component } from 'react';
import axios from 'axios';

import ItemList from './../../molecules/ItemList';

export default class ShowList extends Component {

    // state = {
    //     list: []
    // }


    render(){

        const list = this.props.list.map((item) => {

            return (
                <ItemList 
                key={item.id} 
                id={item.id} 
                todo={item.todo}
                updateItem={this.props.updateItem}
                deleteItem = {this.props.deleteItem}/>
                
            
            );
        })

        return(
            <div>
               <ol>
                   {list}
               </ol>
            </div>
        )
    }
}