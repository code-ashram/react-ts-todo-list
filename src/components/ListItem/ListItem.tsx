import {FC, useState} from "react";
import {ToDo} from "../../models";

type Props = {
    item: ToDo,
    onDelete: (id: string) => void
}

const ListItem: FC<Props> = ({item, onDelete}) => {

    const [done, setDone] = useState<boolean>(false)

    return (
        <li className="todo__list-item flex justify-between p-2">
        <span className='list-item__wrap flex'>
            <input className='list-item__checkbox mr-2' type="checkbox" checked={done} onClick={() => setDone(!done)}/>
            <p className={done ? 'list-item__text text-gray-500 line-through' : 'list-item__text'}>{item.name}</p>
        </span>
            <button onClick={() => onDelete(item.id)}
                    className="list-item__btn btn bg-red-600">Delete
            </button>
        </li>
    )
}

export default ListItem
