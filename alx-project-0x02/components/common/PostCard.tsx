// components/common/PostCard.tsx
import React from 'react';
import { PostProps } from '@/interfaces';

const PostCard: React.FC<PostProps> = ({ title, content, userId }) => {
  return (
    <div className="border p-4 rounded-md shadow bg-white">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-600 mb-2">User ID: {userId}</p>
      <p className="text-gray-800">{content}</p>
    </div>
  );
};

export default PostCard;

