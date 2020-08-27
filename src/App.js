import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoList} from "./components/TodoList";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from "moment";
import {Login} from "./components/Login";
import {TodoApp} from "./components/TodoApp";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

class App extends Component {

    constructor(props){
        super(props);
        const LoginView = () => (
            <Login />
        );
        const TodoAppView = () => (
            <TodoApp />
        );
        this.state = {loginView: LoginView,todoAppView: TodoAppView,isLoggedIn:false}   
        //Save data
        localStorage.setItem('email', "luis");
        localStorage.setItem('password', "123");
        
    }
    
    render() {
        const LoginView = this.state.loginView;
        const TodoAppView = this.state.todoAppView;
        let validado;
        if(localStorage.getItem("isLoggedIn")){
            validado = (
                <div>
                    <ul>
                        <li><Link to="/todo">Todo</Link></li>
                    </ul>
                    <div>
                         <Route path="/todo" component={TodoAppView}/>
                    </div>
                </div>
            );
        }else{
            validado = (
                <div>
                    <ul>
                        <li><Link to="/">Login</Link></li>
                    </ul>
                    <div>
                         <Route path="/" component={LoginView}/>
                    </div>
                </div>
            );
        }


        return (
            <Router>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">TODO React App</h1>
                </header>
                <br />
                {validado}
            </div>
        </Router>
        );
    }

}

export default App;
