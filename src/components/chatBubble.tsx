import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export type Message = {
  id: number;
  isSelf: boolean;
  message: string;
  time: string;
  senderIcon?: { uri: string };
};

export default function ChatBubble({ id, isSelf, message, time, senderIcon }: Message) {
  return (
    <View style={[styles.container, isSelf ? styles.selfContainer : styles.friendContainer]}>
      {!isSelf && senderIcon && <Image source={senderIcon} style={styles.icon} />}
      <View style={styles.messageContainer}>
        <Text style={styles.message}>{message}</Text>
        <Text style={styles.time}>{time}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 10,
  },
  friendContainer: {
    justifyContent: 'flex-start',
  },
  selfContainer: {
    justifyContent: 'flex-end',
  },
  messageContainer: {
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    maxWidth: '80%',
    marginLeft: 10,
    marginRight: 10,
  },
  message: {
    fontSize: 16,
  },
  time: {
    fontSize: 12,
    color: '#666',
    alignSelf: 'flex-end', // 右端に表示されるようにする
    marginTop: 5,
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
});
