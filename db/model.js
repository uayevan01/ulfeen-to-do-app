const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    action: {
        type: String,
        required: [true, 'Todo text field']
    }
}, {timestamps: true});

const Todo = mongoose.model('Todo', TodoSchema);
module.exports = Todo;