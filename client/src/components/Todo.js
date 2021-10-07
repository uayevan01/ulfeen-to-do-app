import React, {Component} from 'react';
import axios from 'axios';

import Input from './Input';
import ListTodo from './ListTodo';

class Todo extends Component {
    state ={
        todos: []
    }

    componentDidMount() {
        this.getTodos();
    }
    
    getTodos = () => {
        axios.get('/api/todos')
            .then(res => {
                if(res.data) {
                    this.setState({todos: res.data})
                }
            })
            .catch(err => console.log(err))
    }

    deleteTodo = (id) => {
        axios.delete(`/api/todos/${id}`)
        .then(res => {
            if(res.data) {
                this.getTodos()
            }
        })
        .catch(err => console.log(err))
    }

    editTodo = (id, editAction) => {
        const task = {editAction: editAction};
        if(task.editAction && task.editAction.length > 0) {
            axios.put(`/api/todos/${id}`, task)
                .then(res => {
                    if(res.data) {
                        this.getTodos();
                    }
                })
                .catch(err => console.log(err))
        } else {
            console.log("Input field is required");
        }

    }

    render() {
        let { todos } = this.state;
        return(
            <div>
                <h1>My Todo List</h1>
                <Input getTodos = {this.getTodos}/>
                <div>Single Click To Cross Off A Todo</div>
                <div>Double Click To Edit A Todo</div>
                <ListTodo todos = {todos} deleteTodo={this.deleteTodo} editTodo={this.editTodo}> </ListTodo>
            </div>
        )
    }
}

export default Todo;