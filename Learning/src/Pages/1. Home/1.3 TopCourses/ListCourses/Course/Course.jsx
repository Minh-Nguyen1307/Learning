import React from 'react'

export default function Course(props) {
    const {imageCourse, title, author, rating, content, cost} = props;

  return (
    <div className='h-[450px] border-4 rounded-3xl w-full'>
        <div className='d-flex flex-column justify-between items-center my-10 h-96'>
            <img src={imageCourse} className='w-auto'/>
            <h6 className='text-xl font-semibold text-gray-800 '>{title}</h6>
            <p>{author}</p>
            <p>⭐⭐⭐⭐⭐{rating} Ratings</p>
            <p>{content}</p>
            <h5 className='text-2xl font-semibold text-gray-800'>${cost}</h5>
        </div>
    </div>
  )
}
