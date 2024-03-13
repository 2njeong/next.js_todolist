"use client";
import {
  Company_Query_Key,
  Todos_Query_key,
  fetchCompany,
  fetchTodos,
} from "(@/fns/queryFns)";
import { useSuspenseQueries } from "@tanstack/react-query";
import { useMemo } from "react";

export const useComapanyTodosQuery = () => {
  const results = useSuspenseQueries({
    queries: [
      {
        queryKey: Company_Query_Key,
        queryFn: fetchCompany,
      },
      {
        queryKey: Todos_Query_key,
        queryFn: fetchTodos,
      },
    ],
  });

  return results;
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
