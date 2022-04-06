import { useState } from 'react';

type AuthUser = {
  name: string;
  email: string;
};

const UseStateInFuture = () => {
  const [user, setUser] = useState<AuthUser | null>(null);

  const handleLogin = () => {
    setUser({
      name: 'samir',
      email: 'samir@test.com',
    });
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div>
      <button onClick={handleLogin}>Logged In</button>
      <button onClick={handleLogout}>Logged Out</button>
      <div>User name is {user?.name}</div>
      <div>User email is {user?.email}</div>
    </div>
  );
};

export default UseStateInFuture;
