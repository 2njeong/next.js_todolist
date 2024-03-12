"use client";
import { Company_Query_Key, fetchCompany } from "(@/axios/queryFns)";
import { useQuery } from "@tanstack/react-query";

const About = () => {
  const { data, isLoading } = useQuery({
    queryKey: Company_Query_Key,
    queryFn: fetchCompany,
  });

  // if (isLoading) {
  //   return <div>로딩중..</div>;
  // }

  return (
    <div>
      우리회사의 이름은 {data.companyInfo.name}이고, 설명은
      {data.companyInfo.desctiption}이며, 이미지는 {data.companyInfo.image}
      입니다.
    </div>
  );
};

export default About;
