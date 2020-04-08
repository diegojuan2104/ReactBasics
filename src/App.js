import React, { Component } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Form from "./components/TodoForm";
import { todos } from "./todos.json";
console.log(todos);

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos,
    };
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  handleAddTodo(todo) {
    this.setState({
      todos: [...this.state.todos, todo],
    });
  }

  handleRemove(index) {
    this.setState({
      todos: this.state.todos.filter((e, i) => {
        return i !== index;
      }),
    });
  }

  render() {
    const todos = this.state.todos.map((todo, i) => {
      return (
        <div className="col-md-4" key={i}>
          <div className="Card bg-white mt-4">
            <div className="card-header">
              <h3>{todo.title}</h3>
            </div>
            <span className="badge badge-pill badge-danger ml-2">
              {todo.priority}
            </span>
            <div className="card-body">
              <p>{todo.description}</p>
              <p>
                <mark>{todo.responsable}</mark>
              </p>
            </div>
            <div className="card-footer">
              <button
                onClick={this.handleRemove.bind(this, i)}
                className="btn btn-danger"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className="App">
        <Navigation />
        <h2>Tasks ->{this.state.todos.length}</h2>
        <div className="container">
          <Form onAddTodo={this.handleAddTodo} />
          <div class="row mt-4">{todos}</div>
        </div>
      </div>
    );
  }
}

export default App;
