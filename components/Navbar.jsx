import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Iceberg, Roboto_Condensed } from "next/font/google";
import Logo from "@/public/Nexura.jpg";

const robotoCondensed = Roboto_Condensed({ subsets: ["latin"], weight: "400" });
const encodeSansExpanded = Iceberg({ subsets: ["latin"], weight: "400" });

const Navbar = () => {
  return (
    <div>
      <nav className="bg-black text-white flex justify-between items-center px-10 py-4">
        <div className="flex items-center ml-10">
          <h1 className={`${encodeSansExpanded.className} text-3xl mr-4`}>
            Nexura
          </h1>
          <Image
            src={Logo}
            alt="Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>
        <div className="flex gap-8">
          <Link
            href="/"
            className={`hover:border-b-2 hover:border-b-green-300 border-b-2 border-b-green-800 ${robotoCondensed.className}`}
          >
            Home
          </Link>
          <Link
            href="/users"
            className={`hover:border-b-2 hover:border-b-green-300 border-b-2 border-b-green-800 ${robotoCondensed.className}`}
          >
            All Users
          </Link>
          <Link
            href="/users/addUser"
            className={`hover:border-b-2 hover:border-b-green-300 border-b-2 border-b-green-800 ${robotoCondensed.className}`}
          >
            Add User
          </Link>
          <Link
            href="/users/updateUser"
            className={`hover:border-b-2 hover:border-b-green-300 border-b-2 border-b-green-800 ${robotoCondensed.className}`}
          >
            Update User
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
