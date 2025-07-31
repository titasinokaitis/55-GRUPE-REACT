import { useEffect, useState } from "react";
import { TodoForm } from "../components/todo/TodoForm";
import { TodoList } from "../components/todo/TodoList";
import { TodoStats } from "../components/todo/TodoStats";

export function Todo() {
    const dataKey = '55gr-todo';
    const [tabIndex, setTabIndex] = useState(0);
    const [id, setId] = useState(1);
    const [list, setList] = useState([]);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(dataKey));

        if (data && data.length > 0) {
            setList(data);
            setId(data.at(-1).id + 1);
        } else {
            localStorage.setItem(dataKey, JSON.stringify(list));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(dataKey, JSON.stringify(list));
    }, [list]);

    let filteredList = list;
    if (tabIndex === 1) {
        filteredList = list.filter(item => !item.isCompleted);
    }
    if (tabIndex === 2) {
        filteredList = list.filter(item => item.isCompleted);
    }

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

    function modifyTaskCompletion(taskId) {
        setList(currectList => currectList.map(
            task => task.id === taskId ? {
                ...task,
                isCompleted: true,
            } : task));
    }

    function modifyTaskText(taskId, newText) {
        setList(currectList => currectList.map(
            task => task.id === taskId ? {
                ...task,
                text: newText,
            } : task));
    }

    return (
        <main>
            <div className="container">
                <div className="row flex-column-reverse flex-md-row">
                    <div className="col-12 col-md-8">
                        <TodoForm addTaskFunc={addTask} />
                        <nav>
                            <div className="nav nav-tabs mb-3" role="tablist">
                                <button className={'nav-link' + (tabIndex === 0 ? ' active' : '')}
                                    onClick={() => setTabIndex(() => 0)} type="button">All tasks</button>
                                <button className={'nav-link' + (tabIndex === 1 ? ' active' : '')}
                                    onClick={() => setTabIndex(() => 1)} type="button">Active tasks</button>
                                <button className={'nav-link' + (tabIndex === 2 ? ' active' : '')}
                                    onClick={() => setTabIndex(() => 2)} type="button">Completed tasks</button>
                            </div>
                        </nav>
                        <TodoList list={filteredList}
                            modifyTaskTextFunc={modifyTaskText}
                            modifyTaskCompletionFunc={modifyTaskCompletion} />
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