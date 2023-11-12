// TransactionTable.js

import React from "react";
import { useState, useEffect } from "react";

const TransactionTable = ({ data, searchTerm, selectedMonth, className }) => {

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const filteredData = data.products?.filter(
    (product) =>
    
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      product.stock > 0 
      &&
      (selectedMonth === "" || product.date.toLowerCase() === selectedMonth.toLowerCase())

      );
      const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData?.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedMonth]);

  return (
    <div className={`bg-white rounded-lg shadow-md  ${className}`}>
    <table className="w-full">
      <thead>
        <tr>
          <th className="p-2">ID</th>
          <th className="p-2">Title</th>
          <th className="p-2">Description</th>
          <th className="p-2">Price</th>
          <th className="p-2">Category</th>
          <th className="p-2">Sold</th>
          <th className="p-2" >Date</th>
          <th className="p-2">Rating</th>
          <th className="p-2">Thumbnail</th>
        </tr>
      </thead>
      <tbody>
        {currentItems?.map((product) => (
          <tr key={product.id}>
            <td className="p-2">{product.id}</td>
            <td className="p-2">{product.title}</td>
            <td className="p-2">{product.description}</td>
            <td className="p-2">${product.price}</td>
            <td className="p-2">{product.category}</td>
            <td className="p-2">{product.sold ? "Yes" : "No"}</td>
            <td className="p-2">{product.date}</td>
            <td className="p-2">{product.rating}</td>
            <td className="p-2">
              <img src={product.thumbnail} alt={product.title} width="50" />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    <div>
    <button  onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
      Previous
    </button>
    <span >{` Page ${currentPage} `}</span>
    <button
      onClick={() => setCurrentPage(currentPage + 1)}
      disabled={indexOfLastItem >= filteredData?.length}
    >
      Next
    </button>
  </div>
</div>
  );
};

export default TransactionTable;
