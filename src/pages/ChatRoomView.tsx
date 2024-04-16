import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import ChatBubble, { Message } from '@/components/chatBubble';
import { SafeAreaView } from 'react-native-safe-area-context';
// import { addUser } from '@/api/userApi';
import { User } from '@/lib/firebase/firestore/collections/User';
import { getUser } from '@/lib/firebase/firestore/userApi';

export default function ChatRoomView(){
  // サンプルデータを仮定しています。実際のデータは適宜置き換えてください。
  const messages: Message[] = [
    { id: 1, isSelf: false, message: "こんにちは！", time: "10:00", senderIcon: { uri: 'https://cdn.technologyreview.jp/wp-content/uploads/sites/2/2018/01/12041914/rob-schreckhise-40905-e1515756734362-1400x787.jpg' } },
    { id: 2, isSelf: true, message: "こんにちは！", time: "10:05" },
    { id: 3, isSelf: false, message: "元気ですか？", time: "10:10", senderIcon: { uri: 'https://cdn.technologyreview.jp/wp-content/uploads/sites/2/2018/01/12041914/rob-schreckhise-40905-e1515756734362-1400x787.jpg' } },
    { id: 4, isSelf: true, message: "はい、元気です！", time: "10:15" },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={messages}
        renderItem={({ item }) => (
          <ChatBubble
            isSelf={item.isSelf}
            message={item.message}
            time={item.time}
            senderIcon={item.senderIcon}
            id={item.id}
          />
        )}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.contentContainer}
        inverted
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
});

