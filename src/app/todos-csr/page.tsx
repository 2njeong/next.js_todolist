"use client";
import Todolist from "(@/components/Todolist)";
import { useAddTodo, useCustomTodosQuery } from "(@/hooks/customQueryhooks)";
import { useInput } from "(@/hooks/customHook)";
import { Todo } from "(@/types)";
import WorkingNDone from "(@/components/WorkingNDone)";
import { useRouter } from "next/navigation";
import { Metadata } from "next";
import { useEffect } from "react";

const TodosCSR = () => {
  const [title, titleHandler, clearTitle] = useInput();
  const [contents, contentsHandler, clearContents] = useInput();
  const { mutate: mutateToAdd } = useAddTodo();
  const { data } = useCustomTodosQuery();
  const router = useRouter();

  useEffect(() => {
    const metadata: Metadata = {
      title: "CRUD",
      description: "CRUD Todos",
    };

    document.title = metadata.title as string;
    const descriptionTag = document.querySelector('meta[name="description"]');
    if (descriptionTag) {
      descriptionTag.setAttribute("content", metadata.description as string);
    }
  }, []);

  // 이렇게까지 할 필요는 없지만, 한번의 fetch로 하위 컴포넌트들에 데이터를 줄 수 있는 customHook을 연습해보고자(결과는 일반 useQuery로 todo가져온 것과 같음) //
  // const { viewModel } = useCustomView();
  // const todos: Todo[] = viewModel[1].todos;

  const newTodo: Pick<Todo, "title" | "contents"> = {
    title,
    contents,
  };

  const AddBtnHandler = () => {
    mutateToAdd(newTodo);
    clearTitle();
    clearContents();
  };

  const goReport = () => {
    router.push("/report");
  };

  return (
    <>
      <div>
        <span>제목</span>
        <input value={title} onChange={titleHandler}></input>
        <span>내용</span>
        <input value={contents} onChange={contentsHandler}></input>
        <button onClick={AddBtnHandler}>추가</button>
        <button onClick={goReport}>할일정보통계</button>
      </div>
      <div>
        <Todolist todos={data} />
        <WorkingNDone todos={data} isDone={true} />
        <WorkingNDone todos={data} isDone={false} />
      </div>
    </>
  );
};

export default TodosCSR;
