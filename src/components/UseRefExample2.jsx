import { useState, useEffect, useRef } from 'react'

function UseRefExample2() {
    const [name, setName] = useState('');
    const render = useRef(1);
    const prevName = useRef('');
    useEffect(() => {
        render.current = render.current + 1;
        prevName.current = name
    }, [name])
    return (
        <div>
            <h1>Render: {render.current}</h1>
            <h1>Prev Name state: {prevName.current}</h1>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control"
            />

        </div>
    )
}

export default UseRefExample2