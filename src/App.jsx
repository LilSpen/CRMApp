import Chat from "./components/chat/chat"
import List from "./components/list/List"
import Detail from "./components/detail/Detail"
import Login from "./components/login/login"
import Notification from "./components/notification/notification"

const App = () => {

  const user = true;

  return (
    <div className='container'>
      {
        user ? (
          <>
            <List />
            <Chat />
            <Detail />
          </>
        ) : (<Login />)
      }
      <Notification />

    </div>
  )
}

export default App