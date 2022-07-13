import { useState, useEffect, useMemo } from 'react';

type UserData = {
  id: number;
  name: string;
};

function App() {
  const [users, setUsers] = useState<UserData[]>([
    { id: 1, name: 'Kyle' },
    { id: 2, name: 'John' },
  ]);
  const [selectedUserId, setSelectedUserId] = useState<number>();

  const selectedUser: UserData | any = useMemo(() => {
    return users.find((user: UserData) => user.id === selectedUserId);
  }, [users, selectedUserId]);

  const selectUser = (id: number) => {
    setSelectedUserId(id);
  };

  const updateUser = (id: number, name: string) => {
    setUsers((prevUsers: UserData[]) => {
      const newUsers = [...prevUsers];
      const user: UserData | any = newUsers.find((user) => user.id === id);
      user.name = name;
      return newUsers;
    });
  };

  useEffect(() => {
    selectUser(1);
    updateUser(1, 'Kate');
  }, []);

  return (
    <div>
      {users.map((user) => user.name).join(', ')}
      <p>{JSON.stringify(selectedUser)}</p>
    </div>
  );
}

export default App;
