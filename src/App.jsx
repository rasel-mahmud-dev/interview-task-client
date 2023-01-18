import {useState} from 'react'
import './App.scss'
import Posts from "./components/Posts";
import AddPost from "./components/AddPost";

function App() {
    return (
        <div className="App px-3">
            <div className="max-w-2xl mx-auto">
                <AddPost/>
                <Posts/>
            </div>
        </div>
    )
}

export default App
