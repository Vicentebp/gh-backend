export type Task = {
  id: string;
  userId: string;
  name: string;
  description?: string;
  startingTime: Date;
  dueTime: Date;
  status: "Pendente" | "em andamento" | "completa";
  dateCreated: Date;
};
