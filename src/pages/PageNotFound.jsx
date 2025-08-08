import React from 'react'
import { X } from "lucide-react"
import { RxDividerVertical } from "react-icons/rx";

const PageNotFound = () => {
  return (
    <div className='min-h-screen bg-primary min-w-screen  flex flex-center text-2xl font-bold text-gray-400'>
      <div className='flex flex-center h-auto w-auto   '>  <X size={35} color='red' fontWeight={100} />404<RxDividerVertical color='white'  size={50}/>Page Not Found !</div>
    </div>
  )
}

export default PageNotFound
