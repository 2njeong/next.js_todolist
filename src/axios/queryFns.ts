export const Company_Query_Key = ["companyInfo"];
export const Todos_Query_key = ["todos"];

export const fetchCompany = async () => {
  try {
    const response = await fetch("http://localhost:3000/company");
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Company 데이터 로드 실패", error);
    return;
  }
};

// export const fetchTodo = async () => {
//   try {
//     const response = await fetch("http://localhost:3000/todos");
//     const data = await response.json();
//     console.log(data);
//     return data;
//   } catch (error) {
//     console.error("Todo 데이터 로드 실패", error);
//     return;
//   }
// };
