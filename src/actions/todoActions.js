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
