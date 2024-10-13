import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className='bg-slate-50'>
      <div className='mx-10 flex justify-between items-center h-20'>
        <div>
          <img src='/1. Header/Logo.png' alt='Logo of Byway' className='w-32' />
        </div>
        <div>
          <Link to='/' className='text-2xl'>
            Courses
          </Link>
        </div>
        <div className='w-1/2'>
          <form className='border border-black rounded-lg d-flex justify-start '>
            <button type=''>
              <FontAwesomeIcon icon={faMagnifyingGlass} className='ml-2' />
            </button>
            <input
              type='search'
              placeholder='Search Courses'
              className='w-11/12 border-none focus:outline-none p-2 bg-slate-50'
            />
          </form>
        </div>
        <div className='w-1/12 flex justify-between'>
          <Link to='/'>
            <button className='btn btn-light border p-2'>Log in</button>
          </Link>
          <Link to='/'>
            <button className='btn btn-success border bg-emerald-800 p-2'>
              Sign up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
