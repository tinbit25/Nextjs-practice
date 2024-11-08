"use client"
import React from 'react'
import {useRouter} from 'next/navigation'

const Checkout = () => {
    const router =useRouter()

    const handleClick=()=>{
        console.log("user purchashed")
        router.push("/confirmation")
        //replace
        //forward
        //back
       }
  return (
    <>
    <div>Checkout page</div>
    <button onClick={handleClick}>Place Order</button>
    </>
  )
}

export default Checkout