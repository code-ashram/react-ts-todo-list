import './App.css'
import {FormEvent, useState} from "react";
import dataBase from "./data.ts";

const App = () => {

    const [list, setList] = useState(dataBase)
    const [name, setName] = useState('')

    const newListItem = {
        id: crypto.randomUUID(),
        name: name
    }
    const addListItem = (e: FormEvent) => {
        e.preventDefault();
        setList([newListItem, ...list])
        setName('')
    }

    return <div className='todo flex flex-col items-center text-emerald-50'>
        <h1 className="text-3xl text-cyan-400 font-bold">
            React + TS TODO-list
        </h1>

        <form onSubmit={addListItem} className="todo__form flex justify-between">
            <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="todo__input text-black w-1/2 rounded"/>
            <button className="btn form__btn bg-green-500">Add</button>
        </form>

        <ul className="todo__list">
            {list.map((listItem) =>
                <li key={listItem.id} className="todo__list-item flex justify-between p-2">
                <span className='list-item__wrap flex'>
                    <input className='list-item__checkbox mr-2' type="checkbox"/>
                    <p className='list-item__text'>{listItem.name}</p>
                </span>
                    <button onClick={() => setList(list.filter((li) => li.id !== listItem.id))} className="list-item__btn btn bg-red-600">Delete</button>
                </li>
            )}
        </ul>
    </div>
}

export default App
