import React, { useState } from "react";
import Productitem from "./Productitem";

const Pagination = ({ products, productsPerPage = 6 }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLast = currentPage * productsPerPage;
const indexOfFirst = indexOfLast - productsPerPage;
const currentProducts = products.slice(indexOfFirst, indexOfLast);
const totalPages = Math.ceil(products.length / productsPerPage);
  return (
    <div className="p-4">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
        {currentProducts.map((item) => (
          <Productitem
            key={item._id}
            name={item._name}
            id={item._id}
            price={item._price}
            image={item._image}
          />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center gap-3 mt-6">
        <button
          onClick={() => setCurrentPage((prev) => prev - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Prev
        </button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 border rounded ${
              currentPage === i + 1 ? "bg-blue-500 text-white" : ""
            }`}
          >
            {i + 1}
          </button>
        ))}
        <button
          onClick={() => setCurrentPage((prev) => prev + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
