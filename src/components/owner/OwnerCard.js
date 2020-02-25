import React from "react";

const EmployeeCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>
          Name: <span className="card-ownname">{props.owner.name}</span>
        </h3>
        <p>{props.owner.description}</p>
      </div>
    </div>
  );
};

export default EmployeeCard;