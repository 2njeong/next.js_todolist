import { Todo } from "(@/types)";

const WorkingNDone = ({
  todos,
  isDone,
}: {
  todos: Todo[];
  isDone: boolean;
}) => {
  return (
    <div className="w-[300px] py-[15px] px-[10px]">
      <h1>{isDone ? "Done" : "Working"}</h1>
      {todos
        .filter((todo) => todo.isDone === isDone)
        .map((todo) => (
          <div key={todo.id}>
            <li>{todo.title}</li>
          </div>
        ))}
    </div>
  );
};

export default WorkingNDone;
