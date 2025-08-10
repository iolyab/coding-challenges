import { useState } from "react";
import { DataTable } from "./DataTable";
import { users } from "./users";
import classes from "./dataTable.module.scss";

export const DataTableContainer = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(5);

  const totalPages = Math.ceil(users.length / usersPerPage);

  const startIndex = (currentPage - 1) * usersPerPage;
  const endIndex = startIndex + usersPerPage;
  const currentUsers = users.slice(startIndex, endIndex);

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleUsersPerPageChange = (e) => {
    setUsersPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  return (
    <div className={classes.tableLayout}>
      <DataTable users={currentUsers} />

      <div className={classes.pages}>
        <button onClick={handlePrevious}>Previous</button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={handleNext}>Next</button>
      </div>

      <div className={classes.usersNum}>
        <label>Users per page:</label>
        <select value={usersPerPage} onChange={handleUsersPerPageChange}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
        </select>
      </div>
    </div>
  );
};
