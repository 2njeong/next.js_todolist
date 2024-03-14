"use client";
import { COMPANY_QUERY_KEY, fetchCompany } from "(@/fns/fetchFns)";
import { useQuery } from "@tanstack/react-query";

const About = () => {
  const { data } = useQuery({
    queryKey: COMPANY_QUERY_KEY,
    queryFn: fetchCompany,
  });

  const { companyInfo } = data;

  return (
    <div className="w-[1080px] mx-auto mt-[10px]">
      우리회사의 이름은 {companyInfo.name}이고, 설명은
      {companyInfo.description}이며, 이미지는 {companyInfo.image}
      입니다.
    </div>
  );
};

export default About;
