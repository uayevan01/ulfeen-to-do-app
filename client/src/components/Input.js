import React, { Component } from 'react'
import axios from 'axios';
//import e from 'express';

class Input extends Component {
    state = {
        action: ''
    }

    addTodo = () => {
        const task = {action: this.state.action}
        if(task.action && task.action.length > 0) {
            axios.post('/api/todos', task)
                .then(res => {
                    if(res.data) {
                        console.log("BITCH BOY", res);
                        this.props.getTodos();
                        this.setState({action: ''});
                    }
                })
                .catch(err => console.log(err))
        } else {
            console.log("Input field is required");
        }
    }

    handleChange = (e) => {
        this.setState ({
            action: e.target.value
        })
    }
    
    handleUpdatedDone = (event) => {
        if(event.key === "Enter") {
            this.addTodo();
        }
    }

    render() {
        let { action } = this.state;
            return(
                <div>
                    <input type = "text" onChange={this.handleChange} value = {action} onKeyDown = {this.handleUpdatedDone} />
                    <button class = "buttonType1" onClick={() => {
                            this.addTodo();
                        }
                        }> Add Todo</button>
                </div>
            )
    }
}

export default Input;