import { Timestamp } from "firebase/firestore";

export interface Letter {
  id: string;
  title: string;
  from: string;
  to: string;
  message: string;
  date: Timestamp;
}
