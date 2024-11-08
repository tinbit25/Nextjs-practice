import React from 'react'

const Commentdetail = ({params}:
{
  params:{
  
  commentId:string,
  ProductId:string
}
}
) => {
  return (
    <div>Comment {params.commentId} of product {params.ProductId}</div>
  )
}

export default Commentdetail