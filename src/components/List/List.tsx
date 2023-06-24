import ListItem from "../ListItem";
import {FC} from "react";
import {ToDo} from "../../models";

type Props = {
    list: ToDo[],
    onDelete: (id: string) => void,
}

const List: FC<Props> = ({list, onDelete}) => (
    <ul className="todo__list">
        {list.map((listItem) => (
            <ListItem key={listItem.id} item={listItem} onDelete={onDelete}/>)
        )}
    </ul>
)

export default List
