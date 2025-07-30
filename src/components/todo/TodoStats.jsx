export function TodoStats({ activeCount, completedCount }) {
    return (
        <>
            <h2>Tasks count: {activeCount + completedCount}</h2>
            <p>Active tasks: {activeCount}</p>
            <p>Completed tasks: {completedCount}</p>
        </>
    )
}