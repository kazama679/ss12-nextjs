import React from 'react';

async function getPost(b2: string) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${b2}`);
    if (!res.ok) {
        throw new Error('K tìm thấy bài viết');
    }
    const data = await res.json();
    return data;
}

export default async function Page({ params }: { params: { b2: string } }) {
    const post = await getPost(params.b2);

    return (
        <div>
            <h1>Chi tiết Bài viết</h1>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    );
}