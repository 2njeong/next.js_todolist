"use client";
import { useComapanyTodosQuery, useCustomView } from "(@/hooks/customhooks)";

const TodosCSR = () => {
  const { viewModel } = useCustomView();
  console.log(viewModel);

  return <div>TodosCSR</div>;
};

export default TodosCSR;
