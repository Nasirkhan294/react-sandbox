import UseFetch from './hooks/UseFetch'

function CustomHookExample1() {

    const { loading, data} = UseFetch('https://jsonplaceholder.typicode.com/posts', {})

    if (loading) {
        <h1>Loading...</h1>
    }
    return (
        <div>
            {data.map((post => 
                <h3 key={post.id}>{post.title}</h3>
            ))}
        </div>
    )
}

export default CustomHookExample1