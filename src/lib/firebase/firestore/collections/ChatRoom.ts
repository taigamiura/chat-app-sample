import { FieldValue } from "firebase/firestore";
import { User } from "./User";

export type ChatRoom = {
  id: string; // チャットルーム固有のID
  creatorId: User['id']; // 作成者のユーザーID
  userIds: User['id'][]; // チャットルームに含まれるユーザーIDのリスト
  createdAt: FieldValue; // 作成日時
  deletedAt?: FieldValue; // 削除日時（null許容）
}
