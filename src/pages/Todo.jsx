import { useState } from "react";
import { TodoForm } from "../components/todo/TodoForm";
import { TodoList } from "../components/todo/TodoList";
import { TodoStats } from "../components/todo/TodoStats";

export function Todo() {
    const [id, setId] = useState(1);
    const [list, setList] = useState([]);

    function addTask(text) {
        setList(currentList => [
            ...currentList,
            {
                id: id,
                text: text,
                isCompleted: false,
            },
        ]);
        setId(id => id + 1);
    }

    function modifyTask(taskId) {
        setList(currectList => currectList.map(
            task => task.id === taskId ? {
                ...task,
                isCompleted: true,
            } : task));
    }

    return (
        <main>
            <div className="container">
                <div className="row flex-column-reverse flex-md-row">
                    <div className="col-12 col-md-8">
                        <TodoForm addTaskFunc={addTask} />
                        <TodoList modifyTaskFunc={modifyTask} list={list.filter(item => !item.isCompleted)} />
                    </div>
                    <div className="col-12 col-md-4 mb-5">
                        <TodoStats
                            activeCount={list.filter(item => !item.isCompleted).length}
                            completedCount={list.filter(item => item.isCompleted).length} />
                    </div>
                </div>
            </div>
        </main>
    );
}