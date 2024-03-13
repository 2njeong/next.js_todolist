// 방법1. dehydreation을 이용한 SSR
import { TODOS_QUERY_KEY } from "(@/fns/fetchFns)";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import SSR from "./SSR";
import { Todo } from "(@/types)";

export default async function TodosSSR() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: TODOS_QUERY_KEY,
    queryFn: async () => {
      const response = await fetch("http://localhost:4000/todos", {
        cache: "no-cache",
      });
      const data: Todo[] = await response.json();
      return data;
    },
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <SSR />
    </HydrationBoundary>
  );
}

// 방법2. 일반적인 SSR
// import Todolist from "(@/components/Todolist)";
// import { Todo } from "(@/types)";
// import Link from "next/link";

// const TodosSSR = async () => {
//   const response = await fetch("http:localhost:4000/todos", {
//     cache: "no-cache",
//   });
//   const data: Todo[] = await response.json();

//   console.log(data);
// return (
//   <>
//     <Todolist todos={data} />
//     <Link href={"/report"}>할일통계목록보기</Link>
//   </>
// );
// };

// export default TodosSSR;
