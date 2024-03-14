"use client";
import Todolist from "(@/components/Todolist)";
import { TODOS_QUERY_KEY } from "(@/fns/fetchFns)";
import { Todo } from "(@/types)";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

const SSR = () => {
  const { data } = useQuery({
    queryKey: TODOS_QUERY_KEY,
    queryFn: async () => {
      const response = await fetch("http://localhost:4000/todos", {
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
    <div className="w-[1080px] mx-auto mt-[10px]">
      <Link
        href={"/report"}
        className="bg-[#788299] text-white rounded-[3px] px-[3px] py-[2px]"
      >
        할일통계목록보기
      </Link>
      <Todolist todos={data} ssr={false} />
    </div>
  );
};

export default SSR;
