import { COMPANY_QUERY_KEY, fetchCompany } from "(@/fns/fetchFns)";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import About from "./About";

export default async function AboutPage() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: COMPANY_QUERY_KEY,
    queryFn: fetchCompany,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <About />
    </HydrationBoundary>
  );
}
