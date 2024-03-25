import { users } from "@/app/utils/db.js";
import { NextResponse } from "next/server";
import fs from "fs";

// GET all Users
export async function GET() {
  return NextResponse.json({ users: users }, { status: 201 });
}

// Create a new user / POST

export async function POST(req, res) {
  const { name, age, email, password } = await req.json();
  if (!name || !age || !email || !password) {
    return NextResponse.json(
      { error: "All fields necessary " },
      { status: 400 }
    );
  }
  const newUser = { id: users.length + 1, name, age, email, password };
  users.push(newUser);

  // Update the db.js file
  fs.writeFileSync(
    "./app/utils/db.js",
    `export let users = ${JSON.stringify(users)}`
  );

  return NextResponse.json(
    { message: "User Added", ok: true },
    { status: 201 }
  );
}

// Update an user /  PUT

export async function PUT(req, res) {
  const { id, name, age, email, password } = await req.json();
  const userIndex = users.findIndex((user) => user.id == id);
  if (userIndex == -1) {
    return NextResponse.json(
      { error: "User not found", ok: false },
      { status: 404 }
    );
  }
  users[userIndex] = { id, name, age, email, password };
  // Update the db.js file
  fs.writeFileSync(
    "./app/utils/db.js",
    `export let users = ${JSON.stringify(users)}`
  );

  return NextResponse.json(
    { message: "User updated successfully ", ok: true },
    { status: 201 }
  );
}
