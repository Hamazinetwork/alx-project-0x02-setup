// pages/posts.tsx
import React, { useEffect, useState } from 'react';
import PostCard from '@/components/common/PostCard';
import { PostProps } from '@/interfaces';

const PostsPage: React.FC = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data: PostProps[]) => {
        setPosts(data.slice(0, 10)); // limit to 10 posts
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Posts</h1>

      {loading ? (
        <p>Loading posts...</p>
      ) : (
        <div className="grid gap-4">
          {posts.map((post) => (
            <PostCard
              key={post.userId}
              userId={post.userId}
              title={post.title}
              content={post.content}
              
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default PostsPage;
