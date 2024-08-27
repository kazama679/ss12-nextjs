import React from 'react'

async function getPost() {
    const res: any = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    return data
}

export default async function page() {
    const posts = await getPost();
    return (
        <div>
            {posts.map((item: any) => {
                return (<ul key={item.id}>
                    <li>{item.title}</li>
                    <li style={{
                        display: "-webkit-box",
                        WebkitLineClamp: 1,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        width: "100%",
                        maxWidth: "600px"
                    }}>{item.body}</li>
                    <li>-----------------</li>
                </ul>)
            })}
        </div>
    )
}