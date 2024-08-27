"use client";
import React, { useState, useEffect } from 'react';

const fetchPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    return data;
};

export default function Page() {
    const [posts, setPosts] = useState<any[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [filteredPosts, setFilteredPosts] = useState<any[]>([]);
    useEffect(() => {
        const loadPosts = async () => {
            const data = await fetchPosts();
            setPosts(data);
            setFilteredPosts(data);
        };

        loadPosts();
    }, []);
    useEffect(() => {
        if (searchTerm) {
            const results = posts.filter(post =>
                post.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredPosts(results);
        } else {
            setFilteredPosts(posts);
        }
    }, [searchTerm, posts]);
    return (
        <div>
            <h1>Tìm Kiếm Bài viết (CSR)</h1>
            <input
                type="text"
                placeholder="Nhập từ khóa tìm kiếm..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div>
                {filteredPosts.length > 0 ? (
                    filteredPosts.map((post) => (
                        <ul key={post.id}>
                            <li>{post.title}</li>
                            <li>{post.body}</li>
                            <li>-----------------</li>
                        </ul>
                    ))
                ) : (
                    <p>Không tìm thấy kết quả.</p>
                )}
            </div>
        </div>
    );
}
