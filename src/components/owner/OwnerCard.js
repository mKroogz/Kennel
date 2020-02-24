import React from "react";

const EmployeeCard = () => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>
          Name: <span className="card-empname">Dr. Malcolm Woof</span>
        </h3>
        <p>Owner and Operator for the past 15 years</p>
      </div>
    </div>
  );
};

export default EmployeeCard;