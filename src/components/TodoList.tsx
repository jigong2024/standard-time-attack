const TodoList = ({ todo, onDelete }) => {
  return (
    <div>
      <p>{todo.title}</p>
      <p>{todo.comments}</p>
      <button onClick={() => onDelete(todo.id)}>삭제</button>
      <button>완료</button>
    </div>
  );
};

export default TodoList;
