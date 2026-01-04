import './App.scss';
import Chat from './component/chat/Chat';
import './component/sidebar/Sidebar'
import { Sidebar } from './component/sidebar/Sidebar';
import Login from './component/login/Login'

function App() {

  const user = null;

  return (
    <div className="App">
      {
        user ? (
          <>
            {/* sidebar  */}
            <Sidebar />
            {/* chat */}
            <Chat />
          </>
        ): (
          <>
            <Login />
          </>
        )
      }
    </div>
  );
}

export default App;
