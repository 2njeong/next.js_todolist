export const Company_Query_Key = ["companyInfo"];
export const Todos_Query_key = ["todos"];

export const fetchCompany = async () => {
  const response = await fetch("http://localhost:3000/api/company");
  const data = response.json();
  return data;
};
