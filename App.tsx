import ChatRoomView from '@/pages/ChatRoomView';
import CountView from '@/pages/CountView';
import store from '@/store';
import { Provider } from 'react-redux';

export default function App() {
  return (
    <Provider store={store}>
      <CountView />
      {/* <ChatRoomView/> */}
    </Provider>
  );
}
