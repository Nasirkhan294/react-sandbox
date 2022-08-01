import React from 'react'

const Button = React.memo(({ addTasks }) => {
    console.log('Button Rendered');
    return (
        <>
            <button className='btn btn-primary' onClick={addTasks}>Add Task</button>
        </>
    )
})

export default Button;