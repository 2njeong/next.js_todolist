export type Company = {
  name: string;
  description: string;
  image: string;
};

export type Todo = {
  id: string | undefined;
  title: string;
  contents: string;
  isDone: boolean;
};
