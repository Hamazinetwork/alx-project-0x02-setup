// pages/home.tsx
import React, { useState } from 'react';
import PostModal from '@/components/common/PostModal';
import Card from '@/components/common/Card';
import Header from '@/components/layout/Header';
<Header/>
type Post = {
  title: string;
  content: string;
};

const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);

  const handleAddPost = (newPost: Post) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Home Page</h1>

      <button
        onClick={() => setModalOpen(true)}
        className="mb-4 bg-blue-600 text-white px-4 py-2 rounded"
      >
        Create Post
      </button>

      <PostModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleAddPost}
      />

      <div className="space-y-4">
        {posts.map((post, index) => (
          <div key={index} className="border p-4 rounded shadow">
            <h2 className="font-semibold text-lg">{post.title}</h2>
            <p className="text-gray-700">{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

