// pages/posts.tsx
import React from 'react';
import PostCard from '@/components/common/PostCard';
import { PostProps } from '@/interfaces';
import Header from '@/components/layout/Header';
import { GetStaticProps } from 'next';

interface PostsPageProps {
  posts: PostProps[];
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data: PostProps[] = await res.json();

  return {
    props: {
      posts: data.slice(0, 10),
    },
  };
};

const PostsPage: React.FC<PostsPageProps> = ({ posts }) => {
  return (
    <div className="p-6">
      <Header />
      <h1 className="text-2xl font-bold mb-6">Posts</h1>

      <div className="grid gap-4">
        {posts.map((post) => (
          <PostCard
            key={post.userId}
            userId={post.userId}
            title={post.title}
            content={post.content} // correct the prop name
          />
        ))}
      </div>
    </div>
  );
};

export default PostsPage;
