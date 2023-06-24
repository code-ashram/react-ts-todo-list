import {ChangeEvent, FormEvent, useState} from "react";

import './App.css'
import dataBase from "./data.ts";
import Form from "./components/Form";
import List from "./components/List";

const App = () => {

    const [list, setList] = useState(dataBase)
    const [name, setName] = useState('')

    const newListItem = {
        id: crypto.randomUUID(),
        name: name
    }

    const handleAdd = (e: FormEvent): void => {
        e.preventDefault();
        if (name.trim()) setList(prevList => [newListItem, ...prevList])
        setName('')
    }

    const handleDelete = (id: string) => {
        setList(list.filter((item) => item.id !== id))
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }

    return (
        <div className='todo flex flex-col items-center text-emerald-50'>
            <h1 className="text-3xl text-cyan-400 font-bold">
                React + TS TODO-list
            </h1>

            <Form onSubmit={handleAdd} value={name} onChange={handleChange}/>
            <List list={list} onDelete={handleDelete}/>

        </div>
    )
}

export default App
