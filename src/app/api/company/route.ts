// 서버 -> DB
export const GET = async (request: Request) => {
  const response = await fetch("http://localhost:4000/companyInfo");
  const companyInfo = await response.json();

  if (!companyInfo) {
    return new Response("Todo is not found", {
      status: 404,
    });
  }

  return Response.json({
    companyInfo,
  });
};
