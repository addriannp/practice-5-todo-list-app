import React, {Component} from 'react';
import axios from 'axios';

export default class ItemList extends Component {

    onEdit = () => {
        const newTodo = window.prompt('edit list', this.props.todo)

        axios.put(`http://localhost:3000/todoList/${this.props.id}`, {
            todo: newTodo
        })
        .then((response) =>{
            this.props.updateItem && this.props.updateItem(response.data);
            console.log(response.data)
        })
    }

    onDelete = () => {
        const isYes = window.confirm('apakah ingin mengapus ?');
        if (isYes){
            axios.delete(`http://localhost:3000/todoList/${this.props.id}`)
            .then( (response) => {
                this.props.deleteItem && this.props.deleteItem (this.props.id);
            })
        }
    }
    render() {
        return (
            <li>
                {this.props.todo}
                <button onClick={this.onEdit}>Edit</button>
                <button onClick={this.onDelete}>Del</button>
            </li>

        );
    }
}