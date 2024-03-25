"use client";
import React from "react";
import { Iceberg, Encode_Sans_Expanded, Arimo } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const iceberg = Iceberg({ subsets: ["latin"], weight: "400" });
const encodeSansExpanded = Encode_Sans_Expanded({
  subsets: ["latin"],
  weight: "400",
});
const arimo = Arimo({
  subsets: ["latin"],
  weight: "400",
});

const Home = () => {
  return (
    <div className="bg-black text-white flex flex-col items-center justify-center">
      <h1
        className={`${encodeSansExpanded.className} text-6xl text-center mt-6 mb-8 bg-gradient-to-r from-red-500 to-blue-500 text-transparent bg-clip-text`}
      >
        Welcome to{" "}
        <span className={`${iceberg.className} text-7xl`}>Nexura</span>
      </h1>
      <div className="rounded-full overflow-hidden mb-20">
        <Image
          src="/Nexu2.jpg"
          alt="Logo"
          width={200}
          height={200}
          className="rounded-full"
        />
      </div>
      <div
        className={`${arimo.className} w-3/4 lg:w-1/2 text-center mb-6 px-4`}
      >
        <p>
          Nexura is a user management website designed to streamline the process
          of managing user data in a modern and efficient manner. With a sleek,
          futuristic design, it provides an intuitive interface for
          administrators to add, update, and delete user information with ease.
          The dark-themed layout, combined with interactive elements, ensures a
          seamless user experience. Whether it's handling user IDs, names, ages,
          or email addresses, Nexura offers a centralized platform for all user
          management needs, making it an essential tool for businesses and
          organizations looking to maintain a well-organized user database.
        </p>
      </div>
      <div className="flex justify-center">
        <Link
          href="/users"
          className="bg-black border border-white rounded-lg px-4 py-2 hover:border-green-500 hover:text-green-500"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default Home;
