import React from "react"
import Textbox from "./textbox";
import Link from 'next/link';





export default function Home() {

  const handleSave = () => {
     
  };

  return (
    <div style={{height:'100vh'}}>
      <div className="absolute flex flex-row  bg-black" style={{height:'calc(100vh/8)',width:'100%'}}>
        <div className="absolute top-5 left-4 text-white text-xl">Project Manager</div>
        <button className=" absolute top-5 right-4 w-7 h-7 bg-white rounded-2xl ml-2 "onClick={handleSave()}>A</button>
        <button className="absolute felx flex-row top-5 right-14 text-white">Login</button>
      </div>
      <div style={{height:'calc(700vh/8)'}} className="absolute w-full top-20 bg-lightGrey">
        <div className="justify-center absolute top-32 left-96 ml-60 text-xl">Sign Up</div>
        <Textbox  id="name" name="name" placeholder="Name"  type="text" className="absolute w-60 top-48 left-80  " labelClassName="text-semiGrey" />
        <Textbox  id="name" name="name" placeholder="Email"  type="text" className="absolute w-60 top-60 mt-5 left-80 " labelClassName="text-semiGrey"/>
        <Textbox  id="name" name="name" placeholder="Phone No"  type="text" className="absolute w-60 top-48  right-60 " labelClassName="text-semiGrey"/>
        <Textbox  id="name" name="name" placeholder="Password"  type="password" className="absolute w-60 top-60 mt-5 right-60" labelClassName="text-semiGrey"/>
        <Link href="/mentee"><button className="bg-black w-48 rounded-xl absolute top-80 left-96 ml-44 text-white mt-10 h-10" >Submit</button></Link>
      </div>
    </div>
  )
}
