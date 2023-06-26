import {useState} from "react";

import './App.css'
import dataBase from "./data.ts";
import Form from "./components/Form";
import List from "./components/List";
import {ToDo} from "./models";

const App = () => {
    const [list, setList] = useState<ToDo[]>(dataBase)

    const addTodo = (todo: ToDo) => {
        setList(prevList => [todo, ...prevList])
    }

    const handleDelete = (id: string) => {
        setList(prevList => prevList.filter((item) => item.id !== id))
    }

    return (
        <div className='todo flex flex-col items-center text-emerald-50'>
            <h1 className="text-3xl text-cyan-400 font-bold">
                React + TS TODO-list
            </h1>

            <Form onSubmit={addTodo}/>
            <List list={list} onDelete={handleDelete}/>
        </div>
    )
}

export default App
