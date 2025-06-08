// pages/users.tsx
import React, { useEffect, useState } from 'react';
import { UserProps } from '@/interfaces';
import UserCard from '@/components/common/UserCard';

const UsersPage: React.FC = () => {
  const [users, setUsers] = useState<UserProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data: UserProps[]) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Users</h1>
      {loading ? (
        <p>Loading users...</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {users.map((user) => (
            <UserCard
              key={user.id}
              id={user.id}
              name={user.name}
              email={user.email}
              address={user.address}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default UsersPage;
