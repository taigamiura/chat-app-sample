import { COLLECTION_NAMES, addDocument } from "./firestore";
import { and, collection, getDocs, or, query, serverTimestamp, where } from "firebase/firestore";
import { ChatRoom } from "@/lib/firebase/firestore/collections/ChatRoom";
import { Friend } from "@/lib/firebase/firestore/collections/Friend";
import { db } from "./firebase";
import { isFriendExists } from "./friendApi";

// チャットルームを一覧取得
export const getChatRooms = async(userId: Friend['userId']): Promise<ChatRoom[]> => {
  const q = query(collection( db, COLLECTION_NAMES.CHAT_ROOMS), where('userIds', 'array-contains', userId))
  const querySnapshot = await getDocs(q);

  const chatRooms: ChatRoom[] = querySnapshot.docs.map((doc) => {
    const chatRoom: ChatRoom = {
      id: doc.id,
      creatorId: doc.data().creatorId,
      userIds: doc.data().userIds,
      createdAt: doc.data().createdAt
    }
    return chatRoom
  })
  return chatRooms
}

// チャットルームを存在チェック
export const isChatRoomExists = async(chatRoom: {creatorId: Friend['userId'], friendId: Friend['friendId']}): Promise<boolean> => {
  const q = query( collection(db, "chatRooms"),
    or(
      and( where("userIds", "array-contains", chatRoom.creatorId)),
      and( where("userIds", "array-contains", chatRoom.friendId))
    )
  );
  return (await getDocs(q)).size > 0;
}

// チャットルームを作成
export const addChatRoom = async(chatRoom: {creatorId: Friend['userId'], friendId: Friend['friendId']}): Promise<void> => {

  const [friendExists, chatRoomExists]: [boolean, boolean] = await Promise.all([
    isFriendExists({ id: chatRoom.creatorId, friendId: chatRoom.friendId }),
    isChatRoomExists({ creatorId: chatRoom.creatorId, friendId: chatRoom.friendId })
  ]);
  if (friendExists && !chatRoomExists) {
    await addDocument(COLLECTION_NAMES.CHAT_ROOMS, {
      creatorId: chatRoom.creatorId,
      userIds: [chatRoom.creatorId, chatRoom.friendId],
      createdAt: serverTimestamp(),
      updateAt: serverTimestamp(),
    });
  } else {
    // alert('チャットルームを作成せずに画面遷移します')
    return
  }
}