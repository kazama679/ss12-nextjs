// import { GetServerSideProps } from 'next';
// import React from 'react';

// interface PostProps {
//     post: {
//         id: number;
//         title: string;
//         body: string;
//     } | null;
//     error: string | null;
// }

// export const getServerSideProps: GetServerSideProps<PostProps> = async (context) => {
//     const { id } = context.params as { id: string };
//     try {
//         const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
//         if (!res.ok) {
//             throw new Error(`Failed to fetch post with id ${id}`);
//         }
//         const post = await res.json();
//         return { props: { post, error: null } };
//     } catch (error: any) {
//         return { props: { post: null, error: error.message } };
//     }
// };

// const Page: React.FC<PostProps> = ({ post, error }) => {
//     return (
//         <div>
//             <h1>Chi tiết Bài viết với Static Params</h1>
//             {error ? (
//                 <p>Đã xảy ra lỗi: {error}</p>
//             ) : post ? (
//                 <div>
//                     <h2>{post.title}</h2>
//                     <p>{post.body}</p>
//                 </div>
//             ) : (
//                 <p>Bài viết không tồn tại.</p>
//             )}
//         </div>
//     );
// };
// export default Page;