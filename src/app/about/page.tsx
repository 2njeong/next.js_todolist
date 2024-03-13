import { Company_Query_Key, fetchCompany } from "(@/fns/queryFns)";
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
    queryFn: fetchCompany,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <About />
    </HydrationBoundary>
  );
}
