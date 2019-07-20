import React, { Component } from 'react';
import axios from 'axios';

export default class AddList extends Component {

    state ={
        todo: ''
    }

    onInputChanged = (event) => {
        this.setState({
            [event.currentTarget.name]: event.currentTarget.value
        })
    }
    onAddList = () => {

        axios.post('http://localhost:3000/todoList', {
            todo: this.state.todo
        })
        .then((response) => {
            this.setState({
                todo:''
            })

            this.props.onAdd && this.props.onAdd(response.data)
        })

        
    }

    render(){
        return(
            <div>
               <input name="todo" onChange={this.onInputChanged} value={this.state.todo}/>
               <button onClick={this.onAddList}>Add</button>
            </div>
        )
    }
}