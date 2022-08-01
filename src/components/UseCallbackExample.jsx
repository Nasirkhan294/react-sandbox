import { useState, useCallback, } from 'react'
import Button from './Button'
function UseCallbackExample() {
    const [tasks, setTasks] = useState([]);

    const addTasks = useCallback(() => {
        setTasks((prevState) => [...prevState, 'some tasks']);
    }, [setTasks])

    return (
        <div>
            <Button addTasks={addTasks} />
            {tasks.map((task, index) =>
                <p key={index}>{task}</p>
            )}
        </div>
    )
}


export default UseCallbackExample