import { useState , useEffect } from "react";

export default function TestQuery() {

    const [data, setData] = useState<any>(null);
    var limit = 1;
    const fetchData = async () => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${limit}`)
        .then(response => response.json())
        .then(data => {
            setData(data);
            console.log(data);
        });
};

useEffect(() => {
    fetchData();
}, [limit]);
       

    return(
        <>
            <h1>Test Query</h1>
            <div>
                {data ? (
                    <div>
                        <h2>{data.title}</h2>
                        <p>Status: {data.completed ? "Completed" : "Not Completed"}</p>
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </>
    )
}
