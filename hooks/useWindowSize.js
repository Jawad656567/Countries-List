// hamne aik height and width wla program banaya hai jis mai ham height and width print karahy hai lekin agar ham ko osko
// kahi aor use karna hai to osko ham copy karegy per ksi aor page mai paste karengy lekin yai to achi baat nahi hai 
// isi liye ham custom hooks create karengy custom hook matalb apna banaya howa hook matlab aik reusable logic aik jagah rakhna 


// is mai ham wo saara program yaha daldengy waha sy ota kar

import { useEffect, useState } from "react";
  
export function useWindowSize(){
     const [windowsize,setWindowSize]=useState({width:window.innerWidth,height:window.innerHeight});
    useEffect(()=>{
    window.addEventListener("resize",()=>{
     setWindowSize({width:window.innerWidth,height:window.innerHeight})
      
    })
    },[]) 
return windowsize
  
}

