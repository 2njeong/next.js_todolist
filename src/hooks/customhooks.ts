"use client";

import { Company_Query_Key, Todos_Query_key } from "(@/axios/queryFns)";
import { QueryClient, useSuspenseQueries } from "@tanstack/react-query";
import { useMemo } from "react";

const useComapanyTodosQuery = () => {
  const queryClient = new QueryClient();
  const result = useSuspenseQueries({
    queries: [
      {
        queryKey: Company_Query_Key,
        queryFn: async () => {
          const response = await fetch("http://localhost:4000/company");
          const data = response.json();
          return data;
        },
      },
      {
        queryKey: Todos_Query_key,
        queryFn: async () => {
          const response = await fetch("/todos");
          const data = response.json();
          return data;
        },
      },
    ],
  });

  return result;
};

export const useCustomView = () => {
  const results = useComapanyTodosQuery().map((result) => result.data); // [{...companyInfo}, [...todos]]

  const viewModel = useMemo(() => {
    const convertView = () => {
      return results;
    };
    return convertView();
  }, [results]);

  return { viewModel };
};
