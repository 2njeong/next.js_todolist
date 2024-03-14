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
    <div className="w-[1080px] mx-auto mt-[10px]">
      <div className="flex justify-between mb-[10px]">
        <div className="flex gap-[5px]">
          <span>제목</span>
          <input
            value={title}
            onChange={titleHandler}
            className="outline-none border-b-2"
          ></input>
          <span>내용</span>
          <input
            value={contents}
            onChange={contentsHandler}
            className="outline-none border-b-2 mr-[5px]"
          ></input>
          <button
            onClick={AddBtnHandler}
            className="bg-[#788299] text-white rounded-[3px] px-[3px] py-[2px]"
          >
            추가
          </button>
        </div>
        <div>
          <button
            onClick={goReport}
            className="bg-[#788299] text-white rounded-[3px] px-[3px] py-[2px]"
          >
            할일정보통계
          </button>
        </div>
      </div>
      <div className="bg-[#f1e1e1] bg-opacity-80">
        <Todolist todos={data} ssr={true} />
        <div className="flex justify-around">
          <WorkingNDone todos={data} isDone={false} />
          <WorkingNDone todos={data} isDone={true} />
        </div>
      </div>
    </div>
  );
};

export default TodosCSR;
