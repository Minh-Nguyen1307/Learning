import React from "react";
import { Link, useParams } from "react-router-dom";
import { allCourses } from "../../Data/1. AllCourses/AllCourses";
export default function Information() {
  
  const { title } = useParams();
  
  const course = allCourses.find((course) => course.title === decodeURIComponent(title));
  if (!course) {
    return <p>Course not found. Please go back and select a valid course.</p>;
  }
  const { intro, rating, content, imageCourse, cost, id } = course;
  return (
    <div>
      <div className='mx-10'>
        <div>
          <p className='text-4xl font-medium my-4'>Information Course</p>
        </div>
        <nav aria-label='breadcrumb' className=' text-lg my-5'>
          <ol className='breadcrumb'>
            <li className='breadcrumb-item'>
              <Link to='/'>Home</Link>
            </li>
            <li className='breadcrumb-item'>
              <Link to='/Courses'>Courses</Link>
            </li>
            <li className='breadcrumb-item active' aria-current='page'>{title}</li>
          </ol>
        </nav>
      </div>
      <div className='d-flex justify-around   h-[500px]'>
        <div className='my-1 p-3 bg-slate-100  w-1/2 flex flex-col justify-around'>
          <h1 className='text-3xl'>{title}</h1>
          <p className='text-lg w-full'>
            Introduction:
            <br />
            {intro}
          </p>
          <p>⭐⭐⭐⭐⭐ {rating} Ratings</p>
          <p>{content}</p>
        </div>
        <div>
          <div className='card h-[500px] w-[400px]'>
            <img src={imageCourse} className='card-img-top p-3 ' alt={id}></img>
            <div className='card-body'>
              <h5 className='card-title text-2xl text-center'>{title}</h5>
              <p className='card-text text-2xl font-medium text-center'>
                {cost}
              </p>
              <button
                className='btn btn-dark w-full p-3 my-3'
                
              >
                Add to Cart
              </button>
              <Link to='/'>
                <button
                  
                  className='btn btn-success w-full p-3'
                >
                  Buy Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
