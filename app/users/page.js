"use client";
import React, { useEffect, useState } from "react";

async function fetchData() {
  const response = await fetch("/api/users");
  const data = await response.json();
  return data;
}

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await fetchData();
      setUsers(data.users);
    };

    fetchUsers();
  }, []);

  // Deletion
  const handleClick = async (id) => {
    await fetch(`/api/users/${id}`, {
      method: "DELETE",
    });
    const newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);
  };

  return (
    <div className="bg-black text-white p-10 min-h-screen">
      <h1 className="text-2xl text-center mt-10 mb-6">User List</h1>
      <ul className="grid grid-cols-4 gap-4">
        {console.log(users)}
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-black border border-white rounded-lg p-4 hover:border-green-500 relative"
          >
            <button
              onClick={() => handleClick(user.id)}
              className="absolute top-0 right-0 bg-black border border-black text-white hover:text-red-500 p-1 rounded-full"
            >
              &#x2715;
            </button>
            <li>
              {" "}
              <span className="text-green-500">ID</span>: {user.id}
            </li>
            <li>Name: {user.name}</li>
            <li>Age: {user.age}</li>
            <li>Email: {user.email}</li>
            <li>Password: {user.password}</li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Users;
