"use client";
import { useDeleteTodo, useEditTodo } from "(@/hooks/customQueryhooks)";
import { Todo } from "(@/types)";

const Todolist = ({ todos, ssr }: { todos: Todo[]; ssr: boolean }) => {
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
    <div className="flex flex-wrap gap-4 px-[10px] py-[10px]">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="w-100 w-1/4 border-2 border-[#788299] flex flex-col px-[10px] py-[10px]"
        >
          <div>
            <p>제목: {todo.title}</p>
            <p>내용: {todo.contents}</p>
          </div>
          {ssr ? (
            <div className="flex gap-2">
              <input
                type="checkbox"
                checked={todo.isDone}
                onChange={() => checkHandler(todo)}
              ></input>
              <button
                className="text-[#788299]"
                onClick={() => deleteHandler(todo)}
              >
                삭제
              </button>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default Todolist;
