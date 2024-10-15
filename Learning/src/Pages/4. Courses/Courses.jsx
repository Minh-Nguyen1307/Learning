import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSliders,
  faArrowUpWideShort,
  faArrowDownShortWide,
} from "@fortawesome/free-solid-svg-icons";
import Course from "../1. Home/1.3 TopCourses/1.3.1 ListCourses/1.3.1.1 Course/Course";
import { allCourses } from "../../Data/1. AllCourses/AllCourses";

export default function Courses() {
  const [allCourse, setAllCourse] = useState(allCourses);
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 8;
  const [costFilter, setCostFilter] = useState("none");
  const [relevanceFilter, setRelevanceFilter] = useState("all");

  const filteredCourses = allCourse
    .filter((course) => {
      if (
        relevanceFilter !== "all" &&
        !course.content.toLowerCase().includes(relevanceFilter)
      ) {
        return false;
      }
      return true;
    })
    .sort((a, b) => {
      if (costFilter === "asc") {
        return parseFloat(a.cost.slice(1)) - parseFloat(b.cost.slice(1));
      } else if (costFilter === "desc") {
        return parseFloat(b.cost.slice(1)) - parseFloat(a.cost.slice(1));
      }
      return 0;
    });

  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = filteredCourses.slice(
    indexOfFirstCourse,
    indexOfLastCourse
  );

  const listAllCourses = currentCourses.map((course) => (
    <Course
      key={course.id}
      imageCourse={course.imageCourse}
      title={course.title}
      author={course.author}
      rating={course.rating}
      content={course.content}
      cost={course.cost}
    />
  ));

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const renderPagination = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <li
          key={i}
          className={`page-item ${i === currentPage ? "active" : ""}`}
        >
          <button className='page-link' onClick={() => setCurrentPage(i)}>
            {i}
          </button>
        </li>
      );
    }
    return pages;
  };

  return (
    <div className='mx-10'>
      <div>
        <p className='text-4xl font-medium my-4'>Design Courses</p>
      </div>
      <nav aria-label='breadcrumb' className=' text-lg'>
        <ol className='breadcrumb'>
          <li className='breadcrumb-item'>
            <Link to='/'>Home</Link>
          </li>
          <li className='breadcrumb-item active' aria-current='page'>
            Courses
          </li>
        </ol>
      </nav>

      <div className='flex justify-between w-full'>
       
        <div className='w-1/6 h-10 flex flex-col justify-between'>
          <div className='mr-20 ml-10'>
            <button className='btn btn-dark w-full font-bold mb-4'>
              <FontAwesomeIcon icon={faSliders} className='mr-2 ' />
              Filter
            </button>
          </div>

          <div className="h-96 flex flex-col justify-between mr-10 ">
          <div className='mb-4'>
            <p className='text-sm font-semibold'>Sort by</p>
            <div className='dropdown-center'>
              <button
                className='btn btn-light dropdown-toggle w-full'
                type='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                {costFilter === "asc"
                  ? "Price: Low to High"
                  : costFilter === "desc"
                  ? "Price: High to Low"
                  : "Select Price"}
              </button>
              <ul className='dropdown-menu'>
                <li>
                  <button
                    className='dropdown-item'
                    onClick={() => setCostFilter("asc")}
                  >
                    <FontAwesomeIcon
                      icon={faArrowUpWideShort}
                      className='mx-2'
                    />
                    Low to High
                  </button>
                </li>
                <li>
                  <button
                    className='dropdown-item'
                    onClick={() => setCostFilter("desc")}
                  >
                    <FontAwesomeIcon
                      icon={faArrowDownShortWide}
                      className='mx-2'
                    />
                    High to Low
                  </button>
                </li>
                <li>
                  <button
                    className='dropdown-item text-center'
                    onClick={() => setCostFilter("none")}
                  >
                    Reset
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <p className='text-sm font-semibold mt-32'>Relevance</p>
            <div className='dropdown-center'>
              <button
                className='btn btn-light dropdown-toggle w-full'
                type='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                {relevanceFilter === "all"
                  ? "Select Level"
                  : relevanceFilter.charAt(0).toUpperCase() +
                    relevanceFilter.slice(1)}
              </button>
              <ul className='dropdown-menu'>
                <li>
                  <button
                    className='dropdown-item text-center'
                    onClick={() => setRelevanceFilter("beginner")}
                  >
                    Beginner
                  </button>
                </li>
                <li>
                  <button
                    className='dropdown-item text-center'
                    onClick={() => setRelevanceFilter("intermediate")}
                  >
                    Intermediate
                  </button>
                </li>
                <li>
                  <button
                    className='dropdown-item text-center'
                    onClick={() => setRelevanceFilter("advanced")}
                  >
                    Advanced
                  </button>
                </li>
                <li>
                  <button
                    className='dropdown-item text-center'
                    onClick={() => setRelevanceFilter("all")}
                  >
                    All Levels
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        </div>
        <div className='w-5/6 rounded-xl border p-4'>
          <div className='grid grid-cols-4 gap-5'>{listAllCourses}</div>

          {filteredCourses.length > coursesPerPage && (
            <div className='d-flex justify-center mt-3'>
              <nav aria-label='Page navigation example'>
                <ul className='pagination'>
                  <li className='page-item'>
                    <button
                      className='page-link'
                      onClick={handlePreviousPage}
                      disabled={currentPage === 1}
                    >
                      Previous
                    </button>
                  </li>
                  {renderPagination()}
                  <li className='page-item'>
                    <button
                      className='page-link'
                      onClick={handleNextPage}
                      disabled={currentPage === totalPages}
                    >
                      Next
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
