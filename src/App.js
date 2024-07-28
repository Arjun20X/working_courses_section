import React, { useEffect, useState } from "react";
import {apiUrl,filterData} from "./data";
import Navbar from "./Components/Navbar";
import Filter from "./Components/Filter";
import { toast } from "react-toastify";
import Cards from "./Components/Cards"
import Spinner from "./Components/Spinner";

const App = () => {
 
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title)

  useEffect( () => {
    const fetchData = async() => {

      setLoading(true);

      try{
        const res = await fetch(apiUrl);
        const output = await res.json();
        // Save data into a variable //
        setCourses(output.data);
      }
      catch(error){
        toast.error("Something went wrong");
      }
      setLoading(false);
    }
    fetchData();
  },[]);
  
  return (
    <div className="flex flex-col min-h-screen bg-bgDark2">
      <div>
        <Navbar/>
      </div>

      <div>
        <div>
          <Filter
            filterData = {filterData}
            category={category}
            setCategory={setCategory}
          />
        </div>
        
        <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
          {
            loading ? (<Spinner/>) : (<Cards courses={courses} category={category}/>)
          }
        </div>
      </div>
      
     

    </div>
  );
};

export default App;
