"use client";
import { useEditTodo } from "(@/hooks/customQueryhooks)";
import { Todo } from "(@/types)";
import { useState } from "react";

const Todolist = ({ todos }: { todos: Todo[] }) => {
  console.log("여기는 투두리스트");

  // const [checked, setChecked] = useState(false);
  const { mutate: mutateToEdit } = useEditTodo();

  const checkHandler = (todo: Todo) => {
    console.log("클릭!");
    // setChecked((prevState) => !prevState); // 이전 상태를 기반으로 반전시킴
    mutateToEdit(todo);
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
          <button>삭제</button>
        </div>
      ))}
    </>
  );
};

export default Todolist;
