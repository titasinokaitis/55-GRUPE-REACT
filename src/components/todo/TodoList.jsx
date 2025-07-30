export function TodoList({ list, modifyTaskFunc }) {
    return (
        <>
            <h2>Active tasks</h2>
            <ul>
                {
                    list.map(item => (
                        <li className="d-flex my-3 p-2" key={item.id}
                            style={{ backgroundColor: '#f1f1f1' }}>
                            {item.text}
                            <button onClick={() => modifyTaskFunc(item.id)} className="btn btn-danger btn-sm ms-auto">Remove</button>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}