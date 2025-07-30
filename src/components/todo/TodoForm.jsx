import { useState } from "react"

export function TodoForm({ addTaskFunc }) {
    const [text, setText] = useState('');

    function handleTextChange(e) {
        setText(e.target.value);
    }

    function handleFormSubmit(e) {
        e.preventDefault();
        addTaskFunc(text);
        setText('');
    }

    return (
        <form onSubmit={handleFormSubmit} className="d-flex flex-column gap-3 mb-5">
            <label className="form-label" htmlFor="text">Text</label>
            <input onChange={handleTextChange} value={text} className="form-control" id="text" type="text" />
            <button className="btn btn-primary" type="submit">Add</button>
        </form>
    )
}