"use client";
import React from "react";
import { useState } from "react";

const AddUser = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = async (e) => {
    e.preventDefault();
    let response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ name, age, email, password }),
    });
    const { ok } = await response.json();
    if (ok) {
      setName("");
      setAge("");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="bg-black text-white flex justify-center">
      <form
        className="space-y-4 w-full max-w-md mt-20 mb-20"
        onSubmit={handleClick}
      >
        <h2 className="text-2xl text-center mb-4">Add User</h2>
        <div>
          <label htmlFor="name" className="block">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            className="bg-transparent border border-white rounded-lg p-2 focus:border-green-500 focus:outline-none w-full"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="age" className="block">
            Age:
          </label>
          <input
            type="number"
            id="age"
            name="age"
            value={age}
            className="bg-transparent border border-white rounded-lg p-2 focus:border-green-500 focus:outline-none w-full"
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email" className="block">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            className="bg-transparent border border-white rounded-lg p-2 focus:border-green-500 focus:outline-none w-full"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password" className="block">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            className="bg-transparent border border-white rounded-lg p-2 focus:border-green-500 focus:outline-none w-full"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mt-8 flex justify-end">
          <button
            type="submit"
            className="bg-black text-white border border-white rounded-lg px-4 py-2 hover:bg-green-500 hover:text-white"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
