import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import TodoList from './components/todos-list.component'
import EditTodo from './components/edit-todo.component'
import CreateTodo from './components/create-todo.component'
import "bootstrap/dist/css/bootstrap.min.css"

class Main extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <h3>To-Do List</h3>
                    <Route path="/" exact component={TodoList} />
                    <Route path="/edit/:id" component={EditTodo} />
                    <Route path="/create" component={CreateTodo} />
                </div>
            </Router>
        )
    }
}

export default Main