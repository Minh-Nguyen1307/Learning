import React from "react";
import Course from "./1.3.1.1 Course/Course";
import { Link } from "react-router-dom";

export default function ListCourses(props) {
  const { topCourses = [] } = props;
  const listCourses =
    topCourses &&
    topCourses.map((allCourses) => (
      <Course
        key={allCourses.id}
        imageCourse={allCourses.imageCourse}
        title={allCourses.title}
        author={allCourses.author}
        rating={allCourses.rating}
        content={allCourses.content}
        cost={allCourses.cost}
      />
    ));
  return (
    <div>
      <h4 className='text-4xl font-semibold text-gray-800 mx-10 mt-5'>
        Top Courses
      </h4>
      <Link to='/' className='text-blue-800 d-flex justify-end m-10'>
        See all
      </Link>
      <div className='grid grid-cols-4 gap-32 mx-10'>{listCourses}</div>
    </div>
  );
}
