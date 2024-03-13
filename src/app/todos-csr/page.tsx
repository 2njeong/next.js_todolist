"use client";
import Todolist from "(@/components/Todolist)";
import { useAddTodo, useCustomTodosQuery } from "(@/hooks/customQueryhooks)";
import { useInput } from "(@/hooks/customHook)";
import { Todo } from "(@/types)";

const TodosCSR = () => {
  const [title, titleHandler, clearTitle] = useInput();
  const [contents, contentsHandler, clearContents] = useInput();
  const { mutate: mutateToAdd } = useAddTodo();

  // 이렇게까지 할 필요는 없지만, 한번의 fetch로 하위 컴포넌트들에 데이터를 줄 수 있는 customHook을 연습해보고자(결과는 일반 useQuery로 todo가져온 것과 같음) //
  // const { viewModel } = useCustomView();
  // const todos: Todo[] = viewModel[1].todos;

  const { data } = useCustomTodosQuery();

  const newTodo: Pick<Todo, "title" | "contents"> = {
    title,
    contents,
  };

  const AddBtnHandler = () => {
    mutateToAdd(newTodo);
    clearTitle();
    clearContents();
  };

  return (
    <>
      <div>
        <span>제목</span>
        <input value={title} onChange={titleHandler}></input>
        <span>내용</span>
        <input value={contents} onChange={contentsHandler}></input>
        <button onClick={AddBtnHandler}>추가</button>
      </div>
      <div>
        <Todolist todos={data} />
      </div>
    </>
  );
};

export default TodosCSR;
