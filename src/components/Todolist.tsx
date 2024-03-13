"use client";
import { useDeleteTodo, useEditTodo } from "(@/hooks/customQueryhooks)";
import { Todo } from "(@/types)";

const Todolist = ({ todos }: { todos: Todo[] }) => {
  const { mutate: mutateToEdit } = useEditTodo();
  const { mutate: mutateToDelete } = useDeleteTodo();

  const checkHandler = (todo: Todo) => {
    mutateToEdit(todo);
  };

  const deleteHandler = (todo: Todo) => {
    if (window.confirm(`할일 [${todo.title}]을 삭제하시겠습니까?`)) {
      mutateToDelete(todo);
    }
  };

  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id}>
          <div>
            <p>제목: {todo.title}</p>
            <p>내용: {todo.contents}</p>
          </div>
          <input
            type="checkbox"
            checked={todo.isDone}
            onChange={() => checkHandler(todo)}
          ></input>
          <button onClick={() => deleteHandler(todo)}>삭제</button>
        </div>
      ))}
    </>
  );
};

export default Todolist;
