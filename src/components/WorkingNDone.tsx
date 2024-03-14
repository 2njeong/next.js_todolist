import { Todo } from "(@/types)";

const WorkingNDone = ({
  todos,
  isDone,
}: {
  todos: Todo[];
  isDone: boolean;
}) => {
  return (
    <>
      <div>
        <h1>{isDone ? "Done" : "Working"}</h1>
        {todos
          .filter((todo) => todo.isDone === isDone)
          .map((todo) => (
            <div key={todo.id}>
              <p>제목: {todo.title}</p>
              <p>내용: {todo.contents}</p>
            </div>
          ))}
      </div>
    </>
  );
};

export default WorkingNDone;
