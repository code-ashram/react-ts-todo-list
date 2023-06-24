import {ChangeEventHandler, FC, FormEventHandler} from "react";

type Props = {
    value: string,
    onSubmit: FormEventHandler<HTMLFormElement>,
    onChange: ChangeEventHandler<HTMLInputElement>,
}

const Form: FC<Props> = ({value, onSubmit, onChange}) =>
    <form onSubmit={onSubmit} className="todo__form flex justify-between">
        <input value={value} onChange={onChange} type="text" className="todo__input text-black w-1/2 rounded"/>
        <button className="btn form__btn bg-green-500">Add</button>
    </form>

export default Form
