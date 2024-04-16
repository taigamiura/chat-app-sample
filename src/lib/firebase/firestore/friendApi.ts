import { COLLECTION_NAMES, addDocument } from "./firestore";
import { and, collection, getDocs, or, query, serverTimestamp, where } from "firebase/firestore";
import { isUserExists } from "./userApi";
import { User } from "@/lib/firebase/firestore/collections/User";
import { Friend } from "@/lib/firebase/firestore/collections/Friend";
import { db } from "./firebase";

// 友達を一覧取得
export const getChatRooms = async(userId: User['id']): Promise<Friend[]> => {
  const q = query(collection( db, COLLECTION_NAMES.FRIENDS),
    or (
      where('userId', '==', userId),
      where('friendId', '==', userId),
    ))
  const querySnapshot = await getDocs(q);
  const friends: Friend[] = querySnapshot.docs.map((doc) => {
    // 論理削除を考慮していない
    const friend: Friend = {
      id: doc.id,
      userId: doc.data().userId,
      friendId: doc.data().friendId,
      createdAt: doc.data().createdAt
    }
    return friend
  })
  return friends
}

// 友達存在チェック
export const isFriendExists = async(Friend: {id: Friend['id'], friendId: Friend['friendId']}): Promise<boolean> => {
  const q = query(collection(db, COLLECTION_NAMES.FRIENDS),
    or( and( where("userId", "==", Friend.id), where("friendId", "==", Friend.friendId) ),
        and( where("userId", "==", Friend.friendId), where("friendId", "==", Friend.id) )
    )
  )
  const snapshot = await getDocs(q)
  return snapshot.size > 0;
}

// 友達追加
export const addFriend = async(Friend: {id: Friend['id'], friendId: Friend['friendId']}): Promise<void> => {

    const [user, friend]: [boolean, boolean] = await Promise.all([
      isUserExists(Friend.id),
      isUserExists(Friend.friendId),
    ]);

    if (!user || !friend) {
      alert('userが存在しません')
      return;
    } else {
      await addDocument(COLLECTION_NAMES.FRIENDS, {
        userId: Friend.id,
        friendId: Friend.friendId,
        createdAt: serverTimestamp(),
        updateAt: serverTimestamp(),
      });
    }
  }
