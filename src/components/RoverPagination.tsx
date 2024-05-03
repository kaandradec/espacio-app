
import React from "react";
import { Pagination } from "flowbite-react";
import { useState } from "react";

export function RoverPagination({ setPageNumber, totalPages = 100 }) {
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page: number) => {
    setCurrentPage(page)
    console.log(page)
    setPageNumber(page)
  };

  return (
    <div className="flex overflow-x-auto sm:justify-center">
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
    </div>
  );
}
