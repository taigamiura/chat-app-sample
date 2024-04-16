import { FieldValue, Timestamp } from "firebase/firestore";

export type User = {
  id: string; // ユーザー固有のID
  name: string; // ユーザー名
  phoneNumber: string; // 電話番号
  createdAt: Timestamp; // 作成日時
  updateAt: Timestamp; // 作成日時
  deletedAt?: Timestamp; // 削除日時（null許容）
}

export type AddUser = {
  id: string; // ユーザー固有のID
  name: string; // ユーザー名
  phoneNumber: string; // 電話番号
}