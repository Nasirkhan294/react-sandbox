import { useState, useEffect, useRef, useMemo } from 'react'

function UseMemoExample() {
    const [number, setNumber] = useState(1);
    const [inc, setInc] = useState(0);

    const renders = useRef(1);

    const sqrt = useMemo(() => getSqrt(number), [number])

    useEffect(() => {
        renders.current++
    })

    const onClick = () => {
        setInc((prevState) => {
            console.log(prevState + 1)
            return prevState + 1
        })
    }

    return (
        <>
            <input type="number" value={number}
                onChange={(e) => setNumber(e.target.value)}
                className="form-control w-12"
            />
            <h2 className="my-2">
                The sqrt of {number} is {sqrt}.
            </h2>
            <button onClick={onClick} className="btn btn-primary">Re Render</button>
            <h3>Renders: {renders.current}</h3>
        </>
    )
}
// Square root function 
const getSqrt = (n) => {
    for (let i = 0; i <= 10000; i++) {
        console.log(i)
    }
    console.log("Expensive function is called!")
    return Math.sqrt(n);
}

export default UseMemoExample