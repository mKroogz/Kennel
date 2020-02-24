import React from "react";

const EmployeeCard = () => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>
          Name: <span className="card-empname">Jake from State Farm</span>
        </h3>
        <p>Position: Pet Groomer</p>
      </div>
    </div>
  );
};

export default EmployeeCard;