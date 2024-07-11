
import PostsPage from '@/components/Posts'
import React from 'react'

type Props = {
  params : {id : string}
}


const getPostById = async (id : string) => {
 const res = await fetch("https://jsonplaceholder.typicode.com/posts/" + id);
  return res.json();
}



export async function generateMetadata({params} : Props){
  const post = await getPostById(params.id);
  return {
    title: post.title,
    description: post.body
  }
}

export async function generateStaticParams(){
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {next : {revalidate : 60}});
  const posts = await res.json();
  const p = posts.map((post : any) => ({
    id: post.id.toString()
  }))

  return p;
}

export default async function page({params} : Props) {
  const post = await getPostById(params.id);
  return (
      <>
         <div>
          <h1 className='text-lg font-bold'>{post.title}</h1>
          <div>{post.id}</div>
          <p>{post.body}</p>
         </div>
      </>
  )
}
