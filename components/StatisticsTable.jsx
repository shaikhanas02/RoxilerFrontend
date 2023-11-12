
import React from "react";

const Statistics = ({ data, selectedMonth, className }) => {
  const filteredData = data.products.filter(
    (product) =>
      product.date.toLowerCase() === selectedMonth.toLowerCase()
  );

  const totalSale = filteredData
  .filter((product) => product.sold)
  .reduce((total, product) => total + product.price, 0);
  const totalSoldItems = filteredData.filter((product) => product.sold).length;
  const totalItemsNotSold = filteredData.filter((product) => !product.sold).length;

  return (
    <> 
<div className={`${className}`} >
    <h2>Statistics - {selectedMonth}</h2>
    <table>
      <tbody>
        <tr>
          <th>Total Sale:</th>
          <td>${totalSale.toFixed(2)}</td>
        </tr>
        <tr>
          <th>Total Sold Items:</th>
          <td>{totalSoldItems}</td>
        </tr>
        <tr>
          <th>Total Items Not Sold:</th>
          <td>{totalItemsNotSold}</td>
        </tr>
      </tbody>
    </table>
  </div>
    </>
  );
};

export default Statistics;
