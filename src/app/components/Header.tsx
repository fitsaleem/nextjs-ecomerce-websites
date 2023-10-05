"use client"

import React from "react";
import Container from "./Container";
import Logo from "./Logo";
import { BsFillCartPlusFill, BsSearch } from 'react-icons/bs';
import {AiOutlineUser} from 'react-icons/ai'
import Link from "next/link";
import { useSession ,signIn ,signOut } from "next-auth/react";
import {FiLogOut} from "react-icons/fi"
import Image from "next/image";




const Header = () => {

  const { data: session } = useSession();
    console.log(session)

  return (
    <div className="bg-bodyColor h-20">
      <Container className="h-full flex items-center md:gap-x-5 justify-between md:justify-start">
        <Logo />
        {/* search field */}
        <div className="w-full bg-white hidden md:flex items-center gap-x-1 border-[1px] border-lightText/50 rounded-full px-4 py-1.5 focus-within:border-orange-600 group">
          <BsSearch className="text-gray-500 group-focus-within:text-darkText duration-200"/>
          <input
            type="search"
            name="searchbox"
            id="searchbox"
            placeholder="search your item"
            className="outline-none flex-1 placeholder:text-sm"
          />
        </div>
        {/* login/register  */}

        <div onClick={()=>{signIn()}} className="headerDiv cursor-pointer">
            <AiOutlineUser className="text-2xl" />
            <p className="text-sm font-semibold">Login/Register</p>
          </div>

           {/* user Image */}
        {session && (
          <Image
            src={session?.user?.image as string}
            alt="user image"
            width={50}
            height={50}
            className="rounded-full object-cover"
          />
        )}
        {/* cart button  */}
       
        <Link href={"/cart"}>
          <div className="bg-black hover:bg-slate-950 rounded-full text-slate-100 hover:text-white flex items-center justify-center gap-x-1 px-3 py-1.5 border-[1px] border-black hover:border-orange-600 duration-200 relative">
            <BsFillCartPlusFill className="text-xl" />
            <p className="text-sm font-semibold">
               $88.00
            </p>
            <span className="bg-white text-orange-600 rounded-full text-xs font-semibold absolute -right-2 -top-1 w-5 h-5 flex items-center justify-center shadow-xl shadow-black">
              00
            </span>
          </div>
        </Link>

        {/* logout */}
         {/* Logout button */}
         {session && (
          <div
            onClick={() => signOut()}
            className="headerDiv px-2 gap-x-1 cursor-pointer"
          >
            <FiLogOut className="text-2xl" />
            <p className="text-sm font-semibold">Logout</p>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Header;
