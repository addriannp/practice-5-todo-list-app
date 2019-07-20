import React, {Component} from 'react';
import axios from 'axios';
import AddList from './../../organisms/AddList'
import ShowList from './../../organisms/ShowList'

export default class TodoList extends Component {

    state = {
        list: []
    };

    onAdd = (data) => {
        let {list} = this.state;
        list.push(data);
        this.setState({list})
    }
    onAdded = () => {}

    updateItem = (dataItem) => {
        let list = this.state.list;
        let newList = list.map((item) => {
            if (item.id == dataItem.id) {
                item.todo = dataItem.todo
            }
            return item;
        })

        this.setState({list: newList});
    }

    deleteItem = (id) => {
        let newList = this.state.list.filter ( (item) => {
            return item.id != id
        });
        this.setState({
            list: newList
        });
    }

    componentDidMount() {
        axios
            .get('http://localhost:3000/todoList')
            .then(response => {
                this.setState({list: response.data})
            })
    }

    render() {
        return (
            <div>
                <AddList onAdd={this.onAdd}/>
                <ShowList
                    list={this.state.list}
                    updateItem={this.updateItem}
                    deleteItem={this.deleteItem}/>
            </div>
        )
    }
}