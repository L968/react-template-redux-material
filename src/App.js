import store from './store';
import Routes from './routes';
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './global.css';

const App = () => (
    <Provider store={store}>
        <Routes />
    </Provider>
);

export default App;