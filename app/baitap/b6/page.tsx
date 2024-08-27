"use client"; 
import React, { useState, useEffect } from 'react';
const size = 5;

async function fetchPosts() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    return data;
}

export default function Page() {
    const [posts, setPosts] = useState<any[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(0);
    useEffect(() => {
        const loadPosts = async () => {
            const data = await fetchPosts();
            setPosts(data);
            setTotalPages(Math.ceil(data.length / size));
        };

        loadPosts();
    }, []);
    const startIndex = (currentPage - 1) * size;
    const endIndex = startIndex + size;
    const currentPosts = posts.slice(startIndex, endIndex);
    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };
    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };
    return (
        <div>
            <h1>Phân Trang với CSR</h1>
            <div>
                {currentPosts.map((item) => (
                    <ul key={item.id}>
                        <li>{item.title}</li>
                        <li>{item.body}</li>
                        <li>-----------------</li>
                    </ul>
                ))}
            </div>
            <div>
                <button onClick={handlePreviousPage} disabled={currentPage === 1}>Previous</button>
                <span> Page {currentPage} of {totalPages} </span>
                <button onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
            </div>
        </div>
    );
}