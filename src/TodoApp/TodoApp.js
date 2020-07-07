import React, { Component } from "react";
import { connect } from "react-redux";

import { addTodo, todoCompleted, showCompleted, showDoing, showAll } from "../actions/todoActions.js";

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

  addTodo = (evt) => {
    this.props.addTodo(this.state.content);
    //Cần phải gọi action tới store để thêm todo
  };

  todoCompleted = (id) => {
    this.props.todoCompleted(id);
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
          <button className="btn btn-primary" onClick={this.props.showAll}>All</button>
          <button className="btn btn-success" onClick={this.props.showDoing}>Doing</button>
          <button className="btn btn-secondary" onClick={this.props.showCompleted}>Completed</button>
        </div>
        <ul>
          {this.props.todoList.map((todo) => (
            <li
              key={todo.id}
              onClick={() => this.todoCompleted(todo.id)}
              style={{
                textDecoration: todo.isCompleted ? "line-through" : "none",
              }}
            >
              {todo.content}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todoList: state.todosReducer.todoList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (content) => dispatch(addTodo(content)),
    todoCompleted: (id) => dispatch(todoCompleted(id)),
    showCompleted: () => dispatch(showCompleted()),
    showDoing: () => dispatch(showDoing()),
    showAll: () => dispatch(showAll())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
