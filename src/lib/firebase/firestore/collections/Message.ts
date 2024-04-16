import { FieldValue } from "firebase/firestore";
import { ChatRoom } from "./ChatRoom";
import { User } from "./User";

// Message インターフェースの定義
export type Message = {
  id: string;
  chatRoomId: ChatRoom['id']; // チャットルームのID
  userId: User['id']; // メッセージを送信したユーザーのID
  message: string; // メッセージ内容
  createdAt: FieldValue; // ここを修正
  updateAt: FieldValue; // 作成日時
  deletedAt?: FieldValue; // 削除日時（null許容）
}

export type AddMessage = {
  chatRoomId: ChatRoom['id'];
  toUserId: User['id'];
  userIds: User['id'][];//いらない
  message: string;
}