// import axios from "axios";
// import React, { useEffect, useState } from "react";

// export default function Company_List() {
//   const [user, setUserData] = useState({Data:[]});

//   useEffect(() => {
//     const userEmail = window.localStorage.getItem("email");
//     axios.get(`http://localhost:3000/vacancies_list?email=${userEmail}`)
//       .then((response) => {
//         setUserData(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching user data:', error);
//       });
//   }, []);
//   const isDataValid = Array.isArray(user.Data) && user.Data.length > 0;
//   console.log(isDataValid);
//   return (
//     <>
//       <h1 style={{marginLeft:"245px",marginTop:"20px"}}>Company List</h1>
//       {user.Data.map((company) => (
//         <div key={company._id}>hell</div>
//       ))}

//     </>
//   );
// }
import Vacancy_view from "../Job_Seeker/Vacancy_view";
import axios from "axios";
import React, { useEffect, useState } from "react";
import NotFound from "./NotFound";

export default function Company_List() {
  const [user, setUserData] = useState({ Data: [] });

  useEffect(() => {
    const userEmail = window.localStorage.getItem("email");
    axios
      .get(`http://localhost:3000/vacancies_list?email=${userEmail}`)
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  // Check if user.Data is an array and not empty before mapping
  const isDataValid = Array.isArray(user.Data) && user.Data.length > 0;
  console.log(user);

  return (
    <>
      {isDataValid ? (
        user.Data.map((company) => (
          <div key={company._id} style={{}}>
            {" "}
            <Vacancy_view
              mright=""
              show="true"
              email={company.Company_email}
              Field={company.Field}
              description={company.job_decription}
              Experience={company.Experience}
              qualification={company.qualification}
              number_of_places={company.number_of_places}
              package={company.package}
              mobile={company.Mobile_no}
            />
          </div>
        ))
      ) : (
        <NotFound data="No Vacancy Found" />
      )}
    </>
  );
}
