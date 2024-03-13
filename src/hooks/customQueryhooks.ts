"use client";
import { queryClient } from "(@/app/provider)";
import {
  COMPANY_QUERY_KEY,
  TODOS_QUERY_KEY,
  fetchCompany,
  fetchDeleteTodo,
  fetchPatchTodo,
  fetchPostTodo,
  fetchTodos,
} from "(@/fns/fetchFns)";
import { Todo } from "(@/types)";
import {
  useMutation,
  useSuspenseQueries,
  useSuspenseQuery,
} from "@tanstack/react-query";
import { useMemo } from "react";

export const useComapanyTodosQuery = () => {
  const results = useSuspenseQueries({
    queries: [
      {
        queryKey: COMPANY_QUERY_KEY,
        queryFn: fetchCompany,
      },
      {
        queryKey: TODOS_QUERY_KEY,
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

export const useCustomTodosQuery = () => {
  const { data } = useSuspenseQuery({
    queryKey: TODOS_QUERY_KEY,
    queryFn: async () => {
      const response = await fetch("http://localhost:4000/todos", {
        cache: "no-cache",
      });
      const data: Todo[] = await response.json();
      return data;
    },
  });
  return { data };
};

export const useAddTodo = () => {
  const { mutate: mutateToAdd } = useMutation({
    mutationFn: fetchPostTodo,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: TODOS_QUERY_KEY });
      console.log("새로운 할일 추가요청");
    },
  });
  return { mutate: mutateToAdd };
};

export const useEditTodo = () => {
  const { mutate: mutateToEdit } = useMutation({
    mutationFn: fetchPatchTodo,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: TODOS_QUERY_KEY });
      console.log("할일 상태 업데이트 성공!");
    },
  });
  return { mutate: mutateToEdit };
};

export const useDeleteTodo = () => {
  const { mutate: mutateToDelete } = useMutation({
    mutationFn: fetchDeleteTodo,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: TODOS_QUERY_KEY });
      console.log("할일 상태 삭제 성공!");
    },
  });
  return { mutate: mutateToDelete };
};
