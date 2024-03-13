import { Todo } from "(@/types)";

const Todolist = ({ todos }: { todos: Todo[] }) => {
  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id}>
          <p>제목: {todo.title}</p>
          <p>내용: {todo.contents}</p>
        </div>
      ))}
    </>
  );
};

export default Todolist;
