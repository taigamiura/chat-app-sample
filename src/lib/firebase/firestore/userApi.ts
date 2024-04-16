import { AddUser, User } from "@/lib/firebase/firestore/collections/User";
import { COLLECTION_NAMES, addDocument, checkDocumentExists, getDocument, setDocument, updateDocument } from "./firestore";
import { collection, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";

// ユーザー追加
export const addUser = async({ id, name, phoneNumber }: AddUser): Promise<void> => {
  await setDocument(COLLECTION_NAMES.USERS, id, {// idをドキュメント名に指定する
    name: name,
    phoneNumber: phoneNumber,
    createdAt: serverTimestamp(),
    updateAt: serverTimestamp(),
  });
}

// ユーザー存在チェック
export const isUserExists = async(id: User['id']): Promise<boolean> =>
  await checkDocumentExists(collection(db, COLLECTION_NAMES.USERS), id)

// ユーザー取得
export const getUser = async(id: User['id']): Promise<User | undefined> =>
  await getDocument(COLLECTION_NAMES.USERS, id);

// ユーザー更新
export const updateUser = async(id: User['id'], user: User): Promise<void> => {
  await updateDocument(COLLECTION_NAMES.USERS, id, user);
}

// ユーザー削除
export const deleteUser = async(userId: User['id']): Promise<void> => {
  const user = await getUser(userId);
  if (!user) {
    return;
  } else {
    user.deletedAt = serverTimestamp();
    await updateUser(userId, user);
  }
}
