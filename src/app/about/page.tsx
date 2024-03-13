import { Company_Query_Key } from "(@/axios/queryFns)";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import About from "./About";

export default async function AboutPage() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: Company_Query_Key,
    queryFn: async () => {
      const response = await fetch("http://localhost:3000/api/company");
      const data = response.json();
      return data;
    },
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <About />
    </HydrationBoundary>
  );
}
