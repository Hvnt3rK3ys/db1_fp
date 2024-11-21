'use client';

import React, { useState, useEffect } from "react";

const E_Bodega = () => {
  interface Post {
    post: string;
  }

  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("../../api/posts/Route.tsx");
        const data = await response.json();
        setPosts(data.posts);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  
  return (
    <div>
      <h1>E_Bodega</h1>
      {posts.map(post => (
        <section>{post.post}</section>
      ))}
    </div>
  );
};

export default E_Bodega;