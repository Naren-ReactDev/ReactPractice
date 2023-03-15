
import './App.css';
import TestFirst from './reactJS/functionalComponents/TestFirst';
//import First from './classComponents/First';
//import UseStateHook from './functionalComponents/UseStateHook';
// import CakeReducer from './reactJS/redux/cakeReducer';
// import CakeContainer from './reactJS/redux/CakeContainer';
import { Provider } from 'react-redux';
import store from './reactJS/redux/store';
import Practice from './reactJS/Practice';
// import UserContainer from './reactJS/redux/UserContainer';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <header className="App-header">
        {/* <First></First>
        <UseStateHook></UseStateHook> */}
        {/* <TestFirst></TestFirst> */}
        {/* <UserContainer></UserContainer> */}
        <Practice></Practice>
      </header>
    </div>
    </Provider>
  );
}

export default App;
