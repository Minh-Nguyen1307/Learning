import React, {useState} from 'react'
import ListCourses from './ListCourses/ListCourses'


export default function TopCourses() {
    const [allCourses, setAllCourses] = useState(allCourses)


  return (
    <div>
        <ListCourses allCourses={allCourses.slide(0,2)}/>
    </div>
  )
}
