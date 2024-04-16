import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store';
import { increment, decrement, multiply, divide, reset } from '@/store/counter';
import { addChatRoom, getChatRooms } from '@/lib/firebase/firestore/chatRoomApi';
export default function CountView() {
  const count: number = useSelector((store: RootState) => store.counter.counter)
  const dispatch = useDispatch();

  const buttonClick = async (action: string) => {
    switch (action) {
      case 'increment':
        dispatch(increment(1));
        break;
      case 'decrement':
        dispatch(decrement(1));
        break;
      case 'multiply':
        dispatch(multiply(2));
        break;
      case 'divide':
        dispatch(divide(2));
        break;
      case 'reset':
        await addChatRoom({creatorId: 'aaaaaaaaa001', friendId: 'bbbbbbbbb002'})
        // await getChatRooms('bbbbbbbbb002')
//         const r = await isChatRoomExists({ chatRoomId: 'uc9u4SLX8mS5reOwpUFL', creatorId: 'aaaaaaaaa001', userIds: ['aaaaaaaaa001', 'bbbbbbbbb002'] })
// console.log(r)
// const all = await getChatRoom({ chatRoomId: 'uc9u4SLX8mS5reOwpUFL', creatorId: 'aaaaaaaaa001', userIds: ['aaaaaaaaa001', 'bbbbbbbbb002'] });
// console.log(all)
//     await postMessage({chatRoomId: 'uc9u4SLX8mS5reOwpUFL', toUserId: 'aaaaaaaaa001', userIds: ['aaaaaaaaa001', 'bbbbbbbbb002'], message: 'FFFFFFFOOOOOOOOO'})
  ///////////////////////////////////
        dispatch(reset());
        break;
      default:
        break;
    }
  };

  const buttons = [
    { label: '+1', action: 'increment', style: styles.incrementButton },
    { label: '-1', action: 'decrement', style: styles.decrementButton },
    { label: '*2', action: 'multiply', style: styles.multiplyButton },
    { label: '/2', action: 'divide', style: styles.divideButton },
    { label: 'RESET', action: 'reset', style: styles.resetButton },
  ];

  return (
    <View style={styles.container}>
      <Text>{count}</Text>
      {buttons.map((button, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.button, button.style]}
          onPress={() => buttonClick(button.action)}>
          <Text style={styles.buttonText}>{button.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginVertical: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  incrementButton: {
    backgroundColor: '#007bff',
  },
  decrementButton: {
    backgroundColor: '#dc3545',
  },
  multiplyButton: {
    backgroundColor: '#28a745',
  },
  divideButton: {
    backgroundColor: '#ffc107',
  },
  resetButton: {
    backgroundColor: '#17a2b8',
  },
});
