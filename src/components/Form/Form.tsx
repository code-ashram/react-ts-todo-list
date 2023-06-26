import {ChangeEvent, FC, FormEvent, useState} from "react";
import {ToDo} from "../../models";

type Props = {
    onSubmit: (todo: ToDo) => void
}

const Form: FC<Props> = ({onSubmit}) => {
    const [name, setName] = useState<string>('')

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }

    const handleAdd = (e: FormEvent): void => {
        e.preventDefault();

        const newToDo: ToDo = {
            id: crypto.randomUUID(),
            name: name
        }

        if (name.trim()) onSubmit(newToDo)

        setName('')
    }

    return (
        <form onSubmit={handleAdd} className="todo__form flex justify-between">
            <input value={name} onChange={handleChange} type="text" className="todo__input text-black w-1/2 rounded"/>
            <button className="btn form__btn bg-green-500">Add</button>
        </form>
    )
}

export default Form
