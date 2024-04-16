import { FieldValue } from "firebase/firestore";
import { User } from "./User";

export type Friend = {
  id: string; // フレンド関係固有のID
  userId: User['id']; // ユーザーID
  friendId: User['id']; // フレンドのユーザーID
  createdAt: FieldValue;
  deletedAt?: FieldValue;
}

