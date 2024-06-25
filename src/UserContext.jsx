import { createContext, useContext, useEffect, useState } from "react";
import { USERNAME } from "./Keys";
import { PASSWORD } from "./Keys";
import PatientDisplay from "./PatientDisplay/PatientDisplay";
import PatientDetails from "./PatientDetails/PatientDetails";



let context = createContext();

export const patientContext = () => {
  return useContext(context);
};

export const UserContext = ({ children }) => {
  const [query, setQuery] = useState([]);
  const [value, setValue] = useState("");

  const url = "https://fedskillstest.coalitiontechnologies.workers.dev";

  let auth = btoa(`${USERNAME}:${PASSWORD}`);

  const Api = async () => {
    try {
      const data = await fetch(url, {
        headers: { Authorization: `Basic ${auth}` },
      });

      const response = await data.json();

      const filteredItems = response.filter(
        (dataValue) =>
          dataValue.name.toLowerCase().indexOf(value.toLowerCase()) !== -1 
        
      );
  

      setQuery(filteredItems);

      return response;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    Api();
  }, []);

  // input search
  const handleInputChange = (event) => {
    setValue(event.target.value);
  };

  const filteredItems = query.filter(
    (dataValue) =>
      dataValue.name.toLowerCase().indexOf(value.toLowerCase()) !== -1 || dataValue.age.toString().indexOf(value.toString()) !== -1 || dataValue.gender.toLowerCase()===(value.toLowerCase())
  );

  const filteredData = (products, query) => {
    let filterProducts = products;

    //filtering input items

    if (query) {
      filterProducts = filteredItems;
    }

    return filterProducts.map(({ name, profile_picture, gender, age }) => {
      return (
        <PatientDisplay
          key={Math.random()}
          profile_picture={profile_picture}
          name={name}
          gender={gender}
          age={age}
        />
      );
    });
  };

  const result = filteredData(value, query);
 

  // individual details

  const [selectedCategory, setSelectedCategory] = useState("Jessica Taylor");

  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredIndividual = (products, selected) => {
    let filterProducts = products;

    // selected filter

    if (selected) {
      filterProducts = filterProducts.filter(
        ({
          name,
          profile_picture,
          gender,
          age,
          date_of_birth,
          diagnosis_history,
          diagnostic_list,
          phone_number,
          lab_results,
          insurance_type,
          emergency_contact,
        }) => {
          return (
            name === selected ||
            profile_picture === selected ||
            gender === selected ||
            age === selected ||
            date_of_birth === selected ||
            diagnosis_history === selected ||
            diagnostic_list === selected ||
            phone_number === selected ||
            lab_results === selected ||
            insurance_type === selected ||
            emergency_contact === selected
          );
        }
      );
    }

    return filterProducts
      .slice(0, 1)
      .map(
        ({
          name,
          profile_picture,
          gender,
          age,
          date_of_birth,
          diagnosis_history,
          diagnostic_list,
          phone_number,
          lab_results,
          insurance_type,
          emergency_contact,
        }) => {
          return (
            <PatientDetails
              key={Math.random()}
              profile_picture={profile_picture}
              name={name}
              gender={gender}
              age={age}
              date_of_birth={date_of_birth}
              diagnosis_history={diagnosis_history}
              diagnostic_list={diagnostic_list}
              phone_number={phone_number}
              lab_results={lab_results}
              insurance_type={insurance_type}
              emergency_contact={emergency_contact}
            />
          );
        }
      );
  };

  const result2 = filteredIndividual(query, selectedCategory);

  return (
    <context.Provider
      value={{
        handleInputChange,
        query,
        value,
        result,
        result2,
        handleClick,
        selectedCategory
      }}
    >
      {children}
    </context.Provider>
  );
};
