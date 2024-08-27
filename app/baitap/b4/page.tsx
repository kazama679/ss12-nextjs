"use client"
import React, { useState, useEffect } from 'react';

async function getPost() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    return data;
}

export default function Page() {
    const [posts, setPosts] = useState<any[]>([]);
    const fetchPosts = async () => {
        const data = await getPost();
        setPosts(data);
    };
    useEffect(() => {
        fetchPosts();
    }, []);
    return (
        <div>
            {posts.map((item) => (
                <ul key={item.id}>
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
                </ul>
            ))}
            <button onClick={fetchPosts}>Refresh</button>
        </div>
    );
}
