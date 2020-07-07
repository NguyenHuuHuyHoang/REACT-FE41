import React, { Component } from "react";
import { connect } from "react-redux";

import { addTodo, todoCompleted, filterTodo } from "../actions/todoActions.js";

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
    };
  }

  handelChange = (evt) => {
    this.setState({
      content: evt.target.value,
    });
  };

  renderToDo = () => (
     this.props.todoList
    .filter((todo) => {
      switch (this.props.filter) {
        case "active": {
          return !todo.isCompleted;
        }
        case "completed": {
          return todo.isCompleted;
        }
        case "all": {
          return todo;
        }
      }
    })
    .map((todo) => (
      <li
        key={todo.id}
        onClick={() => this.todoCompleted(todo.id)}
        style={{
          textDecoration: todo.isCompleted ? "line-through" : "none",
        }}
      >
        {todo.content}
      </li>
    )))

  addTodo = (evt) => {
    this.props.addTodo(this.state.content);
    //Cần phải gọi action tới store để thêm todo
  };

  todoCompleted = (id) => {
    this.props.todoCompleted(id);
  };

  filterTodo = (status) => {
    this.props.filterTodo(status);
  };

  render() {
    return (
      <div className="w-25 mx-auto">
        <h1>Todos</h1>
        <div className="d-flex">
          <input
            type="text"
            className="form-control"
            value={this.state.content}
            //Sự kiện onchange xảy ra khi ta nhập
            //giá trị vào ô input
            onChange={(evt) => this.handelChange(evt)}
          />
          <button
            className="btn btn-success"
            onClick={(evt) => this.addTodo(evt)}
          >
            Add
          </button>
        </div>
        <div className="d-flex justify-content-around m-2">
          <button
            className="btn btn-primary"
            onClick={() => {
              this.filterTodo("all");
            }}
          >
            All
          </button>
          <button
            className="btn btn-success"
            onClick={() => {
              this.filterTodo("active");
            }}
          >
            Action
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => {
              this.filterTodo("completed");
            }}
          >
            Completed
          </button>
        </div>
        <ul>
          {this.renderToDo()}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todoList: state.todosReducer.todoList,
    filter: state.todosReducer.filter, //Chay vao store de lay gia tri status
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (content) => dispatch(addTodo(content)),
    todoCompleted: (id) => dispatch(todoCompleted(id)),
    filterTodo: (status) => dispatch(filterTodo(status)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
