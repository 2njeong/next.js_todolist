import Todolist from "(@/components/Todolist)";
import { Todo } from "(@/types)";
import Link from "next/link";

const TodosSSR = async () => {
  const response = await fetch("http:localhost:4000/todos", {
    cache: "no-cache",
  });
  const data: Todo[] = await response.json();
  console.log(data);
  return (
    <>
      <Todolist todos={data} />
      <Link href={"/report"}>할일통계목록보기</Link>
    </>
  );
};

export default TodosSSR;
