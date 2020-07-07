export const addTodo = (content) => {
  return {
    type: "ADD_TODO", //Bắt buộc phải có, data có thể có hoặc không.
    content,
  };
};

export const todoCompleted = (id) => {
  return {
    type: "TODO_COMPLETED",
    id,
  };
};

export const showAll = () => {
  return {
    type: "SHOW_ALL_TODO"
  }
}

export const showCompleted = () => {
  return {
    type: "SHOW_COMPLETED_TODO"
  }
}

export const showDoing = () => {
  return {
    type: "SHOW_DOING_TODO"
  }
}
