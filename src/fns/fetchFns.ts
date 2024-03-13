import { Todo } from "(@/types)";

export const COMPANY_QUERY_KEY = ["companyInfo"];
export const TODOS_QUERY_KEY = ["todos"];
export const COMPANY_SERVER = "http://localhost:3000/api/company";
export const TODOS_SERVER = "http://localhost:3000/api/todos";

export const fetchCompany = async () => {
  try {
    const response = await fetch(COMPANY_SERVER);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Company 데이터 로드 실패", error);
    return;
  }
};

export const fetchTodos = async () => {
  try {
    const response = await fetch(TODOS_SERVER);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Todo 데이터 로드 실패", error);
    return;
  }
};

export const fetchPostTodo = async (data: Pick<Todo, "title" | "contents">) => {
  try {
    const response = await fetch(TODOS_SERVER, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return response.json();
  } catch (error) {
    console.error(error);
    console.log("새로운 할일 추가요청 실패");
  }
};

export const fetchPatchTodo = async (data: Todo) => {
  try {
    const response = await fetch(`${TODOS_SERVER}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log(response);
    return response.json();
  } catch (error) {
    console.error(error);
    console.log("할일 업데이트 요청 실패");
  }
};
