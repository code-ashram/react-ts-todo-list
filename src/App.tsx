import './App.css'

const App = () => {
    return <div className='todo flex flex-col items-center text-emerald-50'>
        <h1 className="text-3xl text-cyan-400 font-bold">
            React + TS TODO-list
        </h1>

        <form action="" className="todo__form flex justify-between">
            <input type="text" className="todo__input w-1/2 rounded"/>
            <button className="btn form__btn bg-green-500">Add</button>
        </form>

        <ul className="todo__list">
            <li className="todo__list-item flex justify-between p-2">
                <span className='list-item__wrap flex'>
                    <input className='list-item__checkbox mr-2' type="checkbox"/>
                    <p className='list-item__text'>Make array-list</p>
                </span>
                <button className="list-item__btn btn bg-red-600">Delete</button>
            </li>
        </ul>
    </div>
}

export default App
