import React, { Component } from "react";

class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      responsible: "",
      description: "",
      priority: "low",
    };

    //Para poder usar el método con el state
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e) {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
    console.log(this.state);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onAddTodo(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="card bg-white p-2 m-5">
          <div className="form-group">
            <input
              type="text"
              name="title"
              onChange={this.handleInput}
              className="form-control"
              placeholder="Title"
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              name="responsible"
              onChange={this.handleInput}
              className="form-control"
              placeholder="responsible"
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              name="description"
              onChange={this.handleInput}
              className="form-control"
              placeholder="Description"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="priority"
              onChange={this.handleInput}
              className="form-control"
              placeholder="priority"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Agregar
          </button>
        </div>
      </form>
    );
  }
}

export default TodoForm;
