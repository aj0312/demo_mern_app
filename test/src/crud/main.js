import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import TodoList from './components/todos-list.component'
import EditTodo from './components/edit-todo.component'
import CreateTodo from './components/create-todo.component'
import "bootstrap/dist/css/bootstrap.min.css"
import logo from '../logo.svg'

class Main extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                        <img src={logo} width="50" height="50" alt="just a logo" />
                        <Link to="/" className="navbar-brand text-white">To-Do List</Link>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav mr-auto">
                                <li className="navbar-item">
                                    <Link to="/" className="nav-link text-info">ToDos</Link>
                                </li>
                                <li className="navbar-item">
                                    <Link to="/create" className="nav-link text-info">Create To Do</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <br/>
                    <Route path="/" exact component={TodoList} />
                    <Route path="/edit/:id" component={EditTodo} />
                    <Route path="/create" component={CreateTodo} />
                </div>
            </Router>
        )
    }
}

export default Main