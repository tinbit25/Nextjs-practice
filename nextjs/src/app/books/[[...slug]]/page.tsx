import React from 'react'

const BooksRoute
 = ({params}:{
    params:{
    slug:string[]}
 }) => {
    const {slug}=params || {}
    if(slug?.length==1)
        return <div>you are {slug[0]}</div>
    if(slug?.length==2)
        return <div>you are {slug[0]} {slug[1]}</div>
  return (
    <div>BooksRoute

    </div>
  )
}

export default BooksRoute
