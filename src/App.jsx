import Chat from "./components/chat/chat"
import List from "./components/list/List"
import Detail from "./components/detail/Detail"
import Login from "./components/login/login"
import Notification from "./components/notification/notification"
import { onAuthStateChanged } from "firebase/auth"
import { useChatStore } from "./lib/chatStore"

const App = () => {

  const {currentUser, isLoading, fetchUserInfo} = useUserStore();
  const {chatId} = useChatStore;


  const user = true;

  useEffect(( ) => {
    const unSub = onAuthStateChanged(auth, (user) => {
      fetchUserInfo(user?.uid);
    });
    return () => {
        unSub();
    };
  }, [fetchUserInfo]);

  if (isLoading) return <div className="loading">Loading...</div>

  return (
    <div className='container'>
      {
        user ? (
          <>
            <List />
            {chatId && <Chat />}
            {chatId && <Detail />}
          </>
        ) : (<Login />)
      }
      <Notification />

    </div>
  )
}

export default App