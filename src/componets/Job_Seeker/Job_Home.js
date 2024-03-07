import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import Cardd from "./Cardd";
import Jobs from "./Jobs";
import Sidebar from "./sidebar/Sidebar";
import Job_Seeker_Navbar from "./Job_Seeker_Sidebar";

function Job_Home() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [isLoading,setIsLoading] = useState(true)
  const [currentPage,setCurrentPage] =useState(1)
  const itemsPerPage = 6

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const response = await fetch("jobs.json");
        const data = await response.json();
        setJobs(data);
        console.log(data);
        setIsLoading(false)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  //handle input change
  const [query, setquery] = useState("");
  const [locationQuery, setLocationQuery] = useState("");
  const handleInputChange = (event) => {
    setquery(event.target.value);
    console.log(query);
  };
  const handleLocationChange = (event) => {
    setLocationQuery(event.target.value);
  };
  //filter jobs by title
  const filterdItems = jobs.filter(
    (job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );
  console.log(filterdItems);

  //Radio filtering
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  //button based filtering
  const handleClick = (event) => {
    selectedCategory(event.target.value);
  };

  //calculate the index range
  const calculatePageRange = () =>{
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage
    return {startIndex,endIndex}
  }

  //function for the next page
  const nextPage = () =>{
    if(currentPage < Math.ceil(filterdItems.length / itemsPerPage)){
      setCurrentPage(currentPage + 1)
    }
  }

  //function for the previous page
  const prevPage = ()=>{
    if(currentPage>1){
      setCurrentPage(currentPage-1)
    }
  }
  // filter jobs by location
  const filterDataByLocation = (jobs, locationQuery) => {
    return jobs.filter((job) =>
      job.jobLocation.toLowerCase().includes(locationQuery.toLowerCase())
    );
  };

  //main function
  const filterdData = (jobs, selected, query) => {
    let filterdJobs = jobs;

    //filtering input items
    if (query) {
      filterdJobs = filterdItems;
    }

    //categories by filter
    if (selected) {
      filterdJobs = filterdJobs.filter(
        ({
          jobLocation,
          maxPrice,
          experienceLevel,
          employmentType,
          salaryType,
          postingDate,
        }) =>
          jobLocation.toLowerCase() === selected.toLowerCase() ||
          parseInt(maxPrice) <= parseInt(selected) ||
          salaryType.toLowerCase() === selected.toLowerCase() ||
          experienceLevel.toLowerCase() === selected.toLowerCase() ||
          employmentType.toLowerCase() === selected.toLowerCase()
      );
      console.log(filterdJobs);
    }
    filterdJobs = filterDataByLocation(filterdJobs, locationQuery);


    //slice the data based on current page
    const {startIndex,endIndex} = calculatePageRange();
    filterdJobs = filterdJobs.slice(startIndex,endIndex)
    return filterdJobs.map((data, i) => <Cardd key={i} data={data} />);
  };

  const result = filterdData(jobs, selectedCategory, query);

  return (
    <>
      <div className="container1">
        <Banner query={query} handleInputChange={handleInputChange}  query1={locationQuery}
   handleLocationChange={handleLocationChange} />
      </div>
      <div className="maindiv">
        {/*left side */}
        <div className="left bg-white  rounded">
          <Sidebar handleChange={handleChange} handleClick={handleClick}/>
        </div>
        {/*job cards */}
        <div className=" col-span-2 bg-white p-12 rounded-sm">
        {
          isLoading ? (<p className="fw-medium">Loading....</p>) : result.length>0 ? (<Jobs result={result} />) :<>
          <h3 className="h4 fw-bold mb-2">{result.length} Jobs</h3>
          <p>No data found!</p>
          </>
        }
        {/* pageination*/}
        {
          result.length > 0 ? (
            <div className="d-flex justify-content-center mt-4 gap-4">
              <button onClick={prevPage } disabled={currentPage===1} className="btn border-0">Previous</button>
              <span className="mx-2">Page {currentPage} Of {Math.ceil(filterdItems.length / itemsPerPage)}</span>
              <button onClick={nextPage} className="btn border-0" disabled={currentPage === Math.ceil(filterdItems.length / itemsPerPage)}>Next</button>
            </div>
          ) : ""
        }

        </div>

        
      </div>
    </>
  );
}

export default Job_Home;
