import { Company } from "(@/types)";
import axios, { AxiosInstance, AxiosResponse } from "axios";

export const Company_Query_Key = ["companyInfo"];
export const Todos_Query_key = ["todos"];

const axiosApi: AxiosInstance = axios.create({
  baseURL: "http://localhost:3000/api",
});

export const fetchCompany = async (): Promise<Company | undefined> => {
  try {
    const { data }: AxiosResponse<Company> = await axiosApi.get<Company>(
      "/company"
    );
    return data;
  } catch (error) {
    console.error(error);
    return;
  }
};
