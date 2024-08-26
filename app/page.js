"use client"
import Image from "next/image";
import Navbar from "./components/Navbar";
import Gist from 'super-react-gist' // <-- import the library


export default function Home() {
  return (
    <div className="flex min-h-screen  flex-col items-center justify-start p-1 ">
      <Navbar/>
      <Gist url='https://gist.github.com/Joshimmor/3de8d57198da561292c5ca6ebb71c831' />

    </div>
  );
}
