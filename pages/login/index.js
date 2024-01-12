"use client"
import { FaMoon } from "react-icons/fa"
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <main className={ darkMode ? "dark" : "" }>
      <div className="flex min-h-screen flex-col items-center justify-between bg-white text-black dark:bg-slate-800 dark:text-gray-200">
      <nav className="justify-between flex items-center bg-slate-500 dark:bg-gray-900 sm:px-10 py-2 border-gray-200 border-t-0 border-r-0 border-l-0 border-b-2 fixed top-0 w-full">
          <li>
            <a href="/" className=" ml-8 mr-10 bg-gray-400 dark:bg-gray-600 px-4 py-1 rounded-md ">Bean and Brew</a>
            <a href="/login" className=" ml-8 mr-10 bg-gray-400 dark:bg-gray-600 px-4 py-1 rounded-md ">Login</a>
          </li>
          <ul className="flex items-center">
            <li className="">
              <FaMoon onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl"/>
            </li>
            <li>
              <a href="/" className=" ml-8 mr-10 bg-gray-400 dark:bg-gray-600 px-4 py-1 rounded-md  ">Home</a>
              <a href="/menu" className=" mr-10 bg-gray-400 dark:bg-gray-600 px-4 py-1 rounded-md  ">Menu</a>
              <a href="/booking" className=" mr-10 bg-gray-400 dark:bg-gray-600 px-4 py-1 rounded-md  ">Booking</a>
              <a href="/about" className=" bg-gray-400 dark:bg-gray-600 px-4 py-1 rounded-md  ">About</a>
            </li>
          </ul>
        </nav>
        <div className="p-36">
            <h1 className=" text-2xl">Login</h1>
        </div>
      </div>
    </main>
  )
}