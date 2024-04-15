import CountView from '@/pages/CountView';
import store from '@/store';
import { Provider } from 'react-redux';

export default function App() {
  return (
    <Provider store={store}>
      <CountView />
    </Provider>
  );
}
