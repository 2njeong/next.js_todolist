// 서버 -> DB
const TODO_DB_URL = "http://localhost:4000/todos";

export const GET = async (request: Request) => {
  const response = await fetch(TODO_DB_URL);
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

export async function POST(request: Request) {
  // body에서 값을 뽑아오기
  const { title, contents } = await request.json();

  const response = await fetch(TODO_DB_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({ title, contents, isDone: false }),
  });

  const todo = await response.json();

  return Response.json({
    todo,
  });
}

export async function PATCH(request: Request) {
  const data = await request.json();

  const response = await fetch(`${TODO_DB_URL}/${data.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ isDone: !data.isDone }),
  });
  const todo = await response.json();

  return Response.json({
    todo,
  });
}

export async function DELETE(request: Request) {
  const data = await request.json();

  const response = await fetch(`${TODO_DB_URL}/${data.id}`, {
    method: "DELETE",
  });
  const todo = await response.json();

  return Response.json({
    todo,
  });
}
