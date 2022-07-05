import React from "react";
import SideBar from "./component/sidebar/SideBar";
import Index from "./component/center/Index";
import "./App.css"

export default function App(){
  return (
    <div className="flex">
      <SideBar/>
      <Index />
    </div>
  )
}