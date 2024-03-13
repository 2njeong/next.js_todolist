// 방법1. dehydration으로 ISR 구현
import { TODOS_QUERY_KEY } from "(@/fns/fetchFns)";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import Report from "./Report";

export default async function ReportPage() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: TODOS_QUERY_KEY,
    queryFn: async () => {
      const response = await fetch("http://localhost:4000/todos", {
        next: { revalidate: 10 },
      });
      const data = await response.json();
      return data;
    },
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Report />
    </HydrationBoundary>
  );
}

// 방법2. 일반적인 방법
// import { Todo } from "(@/types)";

// export default async function ReportPage() {
//   const response = await fetch("http://localhost:4000/todos", {
//     next: { revalidate: 10 },
//   });
//   const data: Todo[] = await response.json();
//   console.log(data);

//   return (
//     <>
//       <p>현재까지 {data.length}개의 todolist가 등록되었습니다.</p>
//       <p>
//         현재까지 {data.filter((d) => d.isDone === true).length}개의 완료리스트와{" "}
//         {data.filter((d) => d.isDone === false).length}개의 할일 리스트가
//         존재합니다.
//       </p>
//     </>
//   );
// }
