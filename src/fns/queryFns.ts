export const Company_Query_Key = ["companyInfo"];
export const Todos_Query_key = ["todos"];

export const fetchCompany = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/company");
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Company 데이터 로드 실패", error);
    return;
  }
};

export const fetchTodos = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/todos");
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Todo 데이터 로드 실패", error);
    return;
  }
};
