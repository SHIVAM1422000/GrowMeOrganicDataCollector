import React from 'react'
import { useEffect } from 'react';

const DisplayDetailsComponents = () => {


    useEffect(()=>{
        console.log("details fired")
        if(!localStorage.getItem('userDetails')){
            console.log("no details")
        }
    },[])

  return (
     <div>
        Display Details Component
     </div>
  )
}

export default DisplayDetailsComponents