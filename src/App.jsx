import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import Dropdown from "../components/Dropdown";
import TransactionTable from "../components/TransactionTable";
import Statistics from "../components/StatisticsTable";
import BarGraph from "../components/BarGraph";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("March"); // Default selected month
  const [data, setData] = useState({ products: [] }); // Transaction

  
  const fetchData = async () => {
    
    try {
      const response = await fetch("https://roxiler-02bv.onrender.com/products", {
        method: "GET",
      }); 
      const result = await response.json();
      setData(result);
      console.log(result);
      
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [selectedMonth]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleMonthChange = (month) => {
    setSelectedMonth(month);
   
  };
 
 

  return (
    <div className="bg-gray-100 min-h-screen p-4">
<SearchBar handleSearch={handleSearch} />
      <Dropdown
        months={[
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ]}
        selectedMonth={selectedMonth}
        handleMonthChange={handleMonthChange}
      />
      <div className="mt-4 border grid gap-9">

      <TransactionTable
        data={data}
        searchTerm={searchTerm}
        selectedMonth={selectedMonth}
        className="bg-white  rounded-lg shadow-md p-4 "
        />
        </div>
      <Statistics data={data} selectedMonth={selectedMonth} 
                className=" bg-yellow-600 p-4 rounded-lg shadow-md mt-2 h-auto" 
                /> 
      <BarGraph data={data} selectedMonth={selectedMonth} 
                className="bg-white p-8 rounded-lg shadow-md  mt-2" 
                />
    </div>
  );
};

export default App;
