import { users } from "@/app/utils/db.js";
import { NextResponse } from "next/server";

import fs from "fs";

// GET User by id

export async function GET(req, res) {
  const { id } = await res.params;
  const user = users.find((user) => user.id == id);
  return user
    ? NextResponse.json({ user }, { status: 201 })
    : NextResponse.json({ message: "User not found" }, { status: 404 });
}

// POST user credentials and verify.

export async function POST(req, res) {
  const { id } = await res.params;
  const { name, email, password } = await req.json();

  const {
    name: uName,
    email: uEmail,
    password: uPassword,
  } = users.find((user) => user.id == id);

  if (!name || !email || !password) {
    return NextResponse.json(
      { error: "All fields necessary " },
      { status: 400 }
    );
  } else if (uName == name && uEmail == email && uPassword == password) {
    return NextResponse.json(
      { message: "Credentials verified successfully " },
      { status: 201 }
    );
  } else {
    return NextResponse.json({ error: "Invalid Credentials" }, { status: 400 });
  }
}

// Delete an user DELETE

export async function DELETE(req, res) {
  const { id } = await res.params;
  const userIndex = users.findIndex((user) => user.id == id);
  users.splice(userIndex, 1);
  fs.writeFileSync(
    "./app/utils/db.js",
    `export let users = ${JSON.stringify(users)}`
  );

  return NextResponse.json(
    { message: "User Deleted successfully " },
    { status: 201 }
  );
}
