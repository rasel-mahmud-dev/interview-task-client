import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'
import Posts from "./components/Posts";
import AddPost from "./components/AddPost";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App px-3">
      <div className="max-w-2xl mx-auto">

          <AddPost />
          <Posts/>


    </div>
    </div>
  )
}

export default App
