"use client"; 
import React, { useState, useEffect } from 'react';

async function fetchPosts() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/nonexistent-url");
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const data = await res.json();
        return { data, error: null };
    } catch (err: any) {
        return { data: [], error: err.message };
    }
}

export default function Page() {
    const [posts, setPosts] = useState<any[]>([]);
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        const loadPosts = async () => {
            const { data, error } = await fetchPosts();
            if (error) {
                setError(error);
            } else {
                setPosts(data);
            }
        };
        loadPosts();
    }, []);
    return (
        <div>
            <h1>Xử lý Lỗi với SSR</h1>
            {error ? (
                <p>Do đường dẫn sai nên API sẽ không trả về dữ liệu. Từ đó phát sinh ra lỗi ở trên: {error}</p>
            ) : (
                posts.length > 0 ? (
                    posts.map((item) => (
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
                    ))
                ) : (
                    <p>Đang tải dữ liệu...</p>
                )
            )}
        </div>
    );
}
