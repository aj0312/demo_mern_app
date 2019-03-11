import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import '../../index.css'

const Todo = props => (
    <tr>
        <td className={props.todo.todo_completed? 'completed' : ''}>{props.todo.todo_description}</td>
        <td className={props.todo.todo_completed? 'completed' : ''}>{props.todo.todo_responsible}</td>
        <td className={props.todo.todo_completed? 'completed' : ''}>{props.todo.todo_priority}</td>
        <td>
            <Link to={`/edit/${props.todo._id}`}>Edit</Link>
        </td>
    </tr>
)


export default class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/todos')
            .then(res => {
                this.setState({ todos: res.data })
            })
            .catch(error => console.log(error))
    }

    todoList() {
        return this.state.todos.map((todo, i) => {
            return <Todo todo={todo} key={i} />
        })
    }

    render() {
        return (
            <div>
                <h3>The To-Do List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Responsible</th>
                            <th>Priority</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.todoList() }
                    </tbody>

                </table>
            </div>
        )
    }
}