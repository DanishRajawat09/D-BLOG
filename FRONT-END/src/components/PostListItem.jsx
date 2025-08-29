import React from 'react'
import Images from './Images'
import { Link } from 'react-router'

const PostListItem = () => {
  return (
    <div className='flex flex-col xl:flex-row gap-8 '>
        {/* Image */}
        <div className='md:hidden xl:block xl:w-1/3'>
<Images src="postImg.jpeg" classname={"rounded-2xl object-cover"}/>
        </div>
        {/* Details */}
      <div className='flex flex-col gap-4 xl:w-2/3'>
        <Link to={"/test"} className='text-4xl font-semibold'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit id quos beatae </Link>
        <div className='flex items-center gap-2 text-gray-400 text-sm'>
            <span>Written by</span>
            <Link className='text-blue-800'>john doe</Link>
            <span>on</span>
            <Link className='text-blue-800'>Web Design</Link>
            <span>2 days ago</span>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis temporibus hic ad animi eos quia suscipit reiciendis quae sunt nisi! Ea beatae modi deleniti ad ducimus veniam illum aliquid porro!</p>
        <Link to="/test" className='underline text-blue-800 text-sm'>Read More</Link>
      </div>
    </div>
  )
}

export default PostListItem
