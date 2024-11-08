import React from 'react'
import Link from "next/link"
const Productlist = (productList) => {
  return (
    <div>
      <div> product list</div>
        <li><Link href="products/1">product1</Link></li>
        <li><Link href="products/2">product2</Link></li>
        <li><Link href="products/3">product3</Link></li>
        <li><Link href="products/4">product4</Link></li>
        
    </div>
  )
}

export default Productlist