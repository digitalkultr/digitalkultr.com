import { useEffect } from "react";
import React from "react";

export default function SmoothScroll ({ children }){
  useEffect (() =>{
    (
      async () =>{
        const LocomotiveScroll = (await import ("locomotive-scroll")).default;
        const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  },[])
  
  return (
    <>
      {children}
    </>
  );
};


