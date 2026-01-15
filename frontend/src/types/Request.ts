export type RequestStatus =
  | "pending"
  | "processing"
  | "completed";

export type Request = {
  id: string;
  status: RequestStatus;
  progress: number;
  logs: string[];
  result: number | null;
};
