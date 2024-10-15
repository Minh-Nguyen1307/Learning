import React from "react";
import './Filter.css'

export default function Filter() {
  return (
    <div></div>
    
//     <div className="accordion" id="accordionPanelsStayOpenExample">
//       <div className="accordion-item">
//         <h2 className="accordion-header">
//           <button
//             className="accordion-button"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#panelsStayOpen-collapseOne"
//             aria-expanded="true"
//             aria-controls="panelsStayOpen-collapseOne"
//           >
//             Price
//           </button>
//         </h2>
//         <div
//           id="panelsStayOpen-collapseOne"
//           className="accordion-collapse collapse show"
//         >
//           <div className="accordion-body">
//             <label>
//               <input
//                 type="radio"
//                 value="low"
//                 checked={priceFilter === 'low'}
//                 onChange={handlePriceChange}
//               />
//               Low Price
//             </label>
//             <label>
//               <input
//                 type="radio"
//                 value="high"
//                 checked={priceFilter === 'high'}
//                 onChange={handlePriceChange}
//               />
//               High Price
//             </label>
//           </div>
//         </div>
//       </div>

//       <div className="accordion-item">
//         <h2 className="accordion-header">
//           <button
//             className="accordion-button"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#panelsStayOpen-collapseTwo"
//             aria-expanded="false"
//             aria-controls="panelsStayOpen-collapseTwo"
//           >
//             Level of Relevance
//           </button>
//         </h2>
//         <div
//           id="panelsStayOpen-collapseTwo"
//           className="accordion-collapse collapse"
//         >
//           <div className="accordion-body">
//             <label>
//               <input
//                 type="radio"
//                 value="beginner"
//                 checked={levelFilter === 'beginner'}
//                 onChange={handleLevelChange}
//               />
//               Beginner
//             </label>
//             <label>
//               <input
//                 type="radio"
//                 value="intermediate"
//                 checked={levelFilter === 'intermediate'}
//                 onChange={handleLevelChange}
//               />
//               Intermediate
//             </label>
//             <label>
//               <input
//                 type="radio"
//                 value="advanced"
//                 checked={levelFilter === 'advanced'}
//                 onChange={handleLevelChange}
//               />
//               Advanced
//             </label>
//             <label>
//               <input
//                 type="radio"
//                 value="high"
//                 checked={levelFilter === 'high'}
//                 onChange={handleLevelChange}
//               />
//               High
//             </label>
//           </div>
//         </div>
//       </div>

//       <div className="accordion-item">
//         <h2 className="accordion-header">
//           <button
//             className="accordion-button"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#panelsStayOpen-collapseThree"
//             aria-expanded="false"
//             aria-controls="panelsStayOpen-collapseThree"
//           >
//             Filtered Courses
//           </button>
//         </h2>
//         <div
//           id="panelsStayOpen-collapseThree"
//           className="accordion-collapse collapse"
//         >
//           <div className="accordion-body">
//             <ul>
//               {filteredCourses.map((course) => (
//                 <li key={course.id}>{course.title} - ${course.price}</li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
  );
};