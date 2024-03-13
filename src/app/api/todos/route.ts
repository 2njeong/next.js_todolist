// 서버 -> DB
export const GET = async (request: Request) => {
  const response = await fetch("http://localhost:4000/todos");
  const todos = await response.json();

  if (!todos) {
    return new Response("Todo is not found", {
      status: 404,
    });
  }

  return Response.json({
    todos: [...todos],
  });
};
