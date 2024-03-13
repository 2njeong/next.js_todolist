"use client";
import Todolist from "(@/components/Todolist)";
import { Todos_Query_key } from "(@/fns/queryFns)";
import { Todo } from "(@/types)";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

const SSR = () => {
  const { data } = useQuery({
    queryKey: Todos_Query_key,
    queryFn: async () => {
      const response = await fetch("http:localhost:4000/todos", {
        cache: "no-cache",
      });
      const data: Todo[] = await response.json();
      return data;
    },
  });

  if (!data) {
    return <div>데이터 통신 실패</div>;
  }

  return (
    <>
      <Todolist todos={data} />
      <Link href={"/report"}>할일통계목록보기</Link>
    </>
  );
};

export default SSR;
