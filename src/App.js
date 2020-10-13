import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Todos from "./components/Todos";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";
import "./App.css";
import About from "./components/pages/About";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
          title: "Tirar la basura",
          completed: false,
        },
        {
          id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
          title: "Estudiar conta 3",
          completed: false,
        },
        {
          id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
          title: "Entrenar pecho",
          completed: false,
        },
      ],
    };
  }

  // Toggle Complete
  toggleComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  // Delete Todo
  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
  };

  //Add Todo
  addTodo = (title) => {
    const newTodo = {
      id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
      title,
      completed: false,
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <div className="contaniner">
            <Header />
            <Route
              exact
              path="/"
              render={(props) => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Todos
                    todos={this.state.todos}
                    toggleComplete={this.toggleComplete}
                    delTodo={this.delTodo}
                  />
                </React.Fragment>
              )}
            />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
