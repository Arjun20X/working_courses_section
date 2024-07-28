import React, { useState } from 'react'
import Card from './Card';


const Cards = ({courses , category}) => {

    const [likedCourses, setLikedCourses] = useState([]);

    // Returns you a list of all courses recieved from the api response //
    const getCourses = () => {
        if(category === "All"){
            let allCourses = [];
        Object.values(courses).forEach((courseCategory) => {
            courseCategory.forEach((courseData) => {
                allCourses.push(courseData);
            })
        })
        return allCourses;
        }
        else{
            // Mai sirf specific category ka array pass krunga //
            return courses[category];
        }
        
    }

    return (
        <div className='flex flex-wrap justify-center gap-4 mb-4'>

            {!courses ? (
                <div>
                    <p>No Data Found</p>
                </div>
            ) : (getCourses().map( (course) => {
                return <Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses} />
                })

            )}

        </div>
    )
}

export default Cards;