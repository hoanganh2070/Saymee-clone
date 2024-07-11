
import Link from "next/link";
import React from "react";


async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
}



export default async function PostsPage() {
  const posts = await getPosts();
  return (
    <main>
      <h1>Posts archive</h1>
      <ol>
        {posts.map((post : any) => (
         <Link href={`/post/${post.id}`} className="mb-4 font-bold"><li key={post.id}>{post.title}</li></Link>
        ))}
      </ol>
    </main>
  );
}
