"use client";
import { Company_Query_Key, fetchCompany } from "(@/axios/queryFns)";
import { useQuery } from "@tanstack/react-query";

const About = () => {
  const { data } = useQuery({
    queryKey: Company_Query_Key,
    queryFn: fetchCompany,
  });

  const { companyInfo } = data;

  return (
    <div>
      우리회사의 이름은 {companyInfo.name}이고, 설명은
      {companyInfo.description}이며, 이미지는 {companyInfo.image}
      입니다.
    </div>
  );
};

export default About;
