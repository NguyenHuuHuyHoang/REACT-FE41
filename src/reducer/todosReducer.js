const initialState = {
  todoList: [
    { id: 1, content: "Làm việc nhà", isCompleted: false },
    { id: 2, content: "Làm bài tập", isCompleted: false },
    { id: 3, content: "Tập thể dục", isCompleted: false },
  ],
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO": {
      const todoList = [
        ...state.todoList,
        {
          // id: state.todoList[state.todoList.length - 1].id + 1,
          id: Math.random().toString(36).substr(2, 5),
          content: action.content,
          isCompleted: false,
        },
      ];
      return { ...state, todoList };
    }
    case "TODO_COMPLETED": {
      const todoList = state.todoList.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }
        return todo;
      });
      return { ...state, todoList: todoList };
    }
    case "SHOW_COMPLETED_TODO": {
      const completedToDoList = state.todoList.filter(
        (todo) => todo.isCompleted === true
      );
      return { ...state, todoList: completedToDoList };
    }

    case "SHOW_DOING_TODO": {
      const doingToDoList = state.todoList.filter(
        (todo) => todo.isCompleted === false
      );
      return { ...state, todoList: doingToDoList };
    }

    case "SHOW_ALL_TODO": {
      return {...state}
    }

    default:
      return state;
  }
};

export default todosReducer;
