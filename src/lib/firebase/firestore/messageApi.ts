import { Message, AddMessage } from "@/lib/firebase/firestore/collections/Message";
import { COLLECTION_NAMES, addDocument, getDocument } from "./firestore";
import { serverTimestamp } from "firebase/firestore";
import { isChatRoomExists } from "./chatRoomApi";

// メッセージを取得
export const getChatMessages = async(message: {chatRoomId: Message['chatRoomId']}): Promise<Message | undefined> => {
  return await getDocument(COLLECTION_NAMES.MESSAGES, message.chatRoomId);
}
// メッセージを投稿
export const addMessage = async({ chatRoomId, toUserId, message, userIds }: AddMessage): Promise<void> => {

  // await isChatRoomExists({ chatRoomId: chatRoomId, userId: toUserId, userIds: userIds })

  // if (!isChatRoomExists) {
  //   alert('チャットルームが存在しません')
  //   return
  // }

  alert('addDocument')
  await addDocument(COLLECTION_NAMES.MESSAGES, {
    chatRoomId: chatRoomId,
    userId: toUserId,
    message: message,
    createdAt: serverTimestamp(),
    updateAt: serverTimestamp(),
  });
  alert('END')
}