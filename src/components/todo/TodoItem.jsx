import { useState } from "react";

export function TodoItem({ task, modifyTaskTextFunc, modifyTaskCompletionFunc }) {
    const [isEditMode, setIsEditMode] = useState(false);
    const [text, setText] = useState(task.text);

    if (isEditMode) {
        return (
            <li className="d-flex my-3 p-2" key={task.id}
                style={{ backgroundColor: '#f1f1f1' }}>
                <input onChange={(e) => setText(e.target.value)} value={text} style={{ display: 'flex', flexGrow: 1 }} type="text" />
                {!task.isCompleted && (
                    <button onClick={() => {
                        modifyTaskTextFunc(task.id, text);
                        setIsEditMode(false);
                    }} className="btn btn-success btn-sm ms-3">Update</button>
                )}
                {!task.isCompleted && (
                    <button onClick={() => {
                        setText(task.text);
                        setIsEditMode(false);
                    }} className="btn btn-secondary btn-sm ms-3">Cancel</button>
                )}
            </li>
        );
    }

    return (
        <li className="d-flex my-3 p-2" key={task.id}
            style={{ backgroundColor: '#f1f1f1' }}>
            {text}
            {!task.isCompleted && (
                <button onClick={() => setIsEditMode(true)} className="btn btn-warning btn-sm ms-auto">Edit</button>
            )}
            {!task.isCompleted && (
                <button onClick={() => modifyTaskCompletionFunc(task.id)} className="btn btn-danger btn-sm ms-3">Remove</button>
            )}
        </li>
    );
}