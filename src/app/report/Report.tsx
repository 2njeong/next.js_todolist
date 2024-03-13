"use client";
import { Todos_Query_key } from "(@/axios/queryFns)";
import { Todo } from "(@/types)";
import { useQuery } from "@tanstack/react-query";

const Report = () => {
  const { data } = useQuery({
    queryKey: Todos_Query_key,
    queryFn: async () => {
      const response = await fetch("http://localhost:4000/todos", {
        next: { revalidate: 10 },
      });
      const data: Todo[] = await response.json();
      return data;
    },
  });

  // server-side 렌더링이라서 isLoading을 고려할 필요는 없지만, 만약 서버-DB 간 네트워크 통신 및 기타 오류 발생 시 data가 undefined될 가능성 처리
  if (!data) {
    return <div>데이터 통신 실패</div>;
  }

  return (
    <>
      <p>현재까지 {data.length}개의 todolist가 등록되었습니다.</p>
      <p>
        현재까지 {data.filter((d) => d.isDone === true).length}개의 완료리스트와{" "}
        {data.filter((d) => d.isDone === false).length}개의 할일 리스트가
        존재합니다.
      </p>
    </>
  );
};

export default Report;
