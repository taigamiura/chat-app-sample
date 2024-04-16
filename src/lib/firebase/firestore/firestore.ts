import { db } from './firebase'

import {
  DocumentData,
  collection,
  doc,
  getDoc,
  setDoc,
  addDoc,
  updateDoc,
  CollectionReference
} from 'firebase/firestore'

export const COLLECTION_NAMES = {
  USERS: 'users',
  FRIENDS: 'friends',
  CHAT_ROOMS: 'chatRooms',
  MESSAGES: 'messages',
}

export const getDocument = async<T extends DocumentData>(collectionName: string, documentName: string): Promise<T | undefined> =>
  (await getDoc(doc(db, collectionName, documentName))).data() as T;

export const checkDocumentExists = async(collectionRef: CollectionReference, documentName: string): Promise<boolean> =>
  (await getDoc(doc(collectionRef, documentName))).exists();

export const addDocument = async <T extends DocumentData>(collectionName: string, data: T): Promise<void> => {
  await addDoc(collection(db, collectionName), data);
}

export const setDocument = async <T extends DocumentData>(collectionName: string, documentName: string, data: T): Promise<void> => {
  await setDoc(doc(db, collectionName, documentName), data);
}

export const updateDocument = async<T extends DocumentData>(collectionName: string, documentName: string, data: T): Promise<void> => {
  await updateDoc(doc(db, collectionName, documentName), { data, merge: true });
}
