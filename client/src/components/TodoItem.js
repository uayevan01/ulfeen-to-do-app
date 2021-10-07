import React, {useState} from 'react';

const TodoItem = ({ todo, deleteTodo, editTodo }) => {
    const timeHour = parseInt(todo.createdAt.toString().substring(11, 13));
    console.log(timeHour);
    const newTimeHour = (timeHour + 20) % 24;
    var finalTimeHour = 0;
    var isAM = '';
    if(newTimeHour > 12) {
        isAM = 'PM';
        finalTimeHour = newTimeHour - 12;
    } else {
        isAM = 'AM';
        if(timeHour === 0)
            finalTimeHour = 12;
        else
            finalTimeHour = newTimeHour;
    }
    const timeValue = finalTimeHour.toString() + todo.createdAt.toString().substring(13, 19) + ' ' + isAM;
    const [editing, setEditing] = useState(false)
    const [checked, setChecked] = useState(false)
    const [editAction, setAction] = useState('')
    const handleEditing = () => {
        setEditing(true)
    }
    const handleUpdatedDone = (event) => {
        if(event.key === "Enter") {
            setEditing(false);
            editTodo(todo._id, editAction);
            setAction('');
        }
        else if(event.key === "Escape") {
            setEditing(false);
            setAction('');
        }
    }

    const handleEditingChange = (event) => {
        setAction(event.target.value);
    }

    const changeStyle = (event) => {
        if(checked) {
            event.target.style.fontStyle = "normal";
            event.target.style.color ="#ffffff";
            event.target.style.opacity = 1;
            event.target.style.textDecoration = "none";
            setChecked(false)
        }
        else {
            event.target.style.fontStyle = "italic";
            event.target.style.color ="#ffffff";
            event.target.style.opacity = 0.6;
            event.target.style.textDecoration = "line-through";
            setChecked(true)
        }
    }


    let viewMode = {};
    let editMode = {};

    if(editing) {
        viewMode.display = "none";
    } else {
        editMode.display = "none";
    }
    
    return(
        <div>
            <li key = {todo._id}> 
                <div onDoubleClick = {handleEditing} onClick = {changeStyle} style={viewMode}> 
                    {todo.action} 
                </div>
                
                <div class = "rightText"style={viewMode}>{timeValue}</div>
                <input type="text" style={editMode} onKeyDown = {handleUpdatedDone} onChange={handleEditingChange} value = {editAction}></input>
                <button class="buttonType2" style={editMode} onClick = {() => {
                    setEditing(false);
                    editTodo(todo._id, editAction);
                    setAction('');
                }} >Edit Todo</button>
                <button class="buttonType2" style={editMode} onClick = {() => {
                    setEditing(false);
                    setAction('');
                }}>Cancel Edit</button>
            </li>
            <button class = "buttonType1" onClick ={() => deleteTodo(todo._id)}>
                Delete Todo
            </button>
            <p></p>
        </div>
        )
}
export default TodoItem