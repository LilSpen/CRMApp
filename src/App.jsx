import Chat from "./components/chat/chat"
import List from "./components/list/List"
import Detail from "./components/detail/Detail"

const App = () => {
  return (
    <div className='container'>
      <List />
      <Chat />
      <Detail />
    </div>
  )
}

export default App