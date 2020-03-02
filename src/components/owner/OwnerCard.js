import React from "react";

const OwnerCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>
          Name: <span className="card-ownname">{props.owner.name}</span>
        </h3>
        <p>{props.owner.description}</p>
        <button
          type="button"
          onClick={() => props.history.push(`/owners/${props.owner.id}/edit`)}
        >
          Edit
        </button>
        <button type="button" onClick={() => props.deleteOwner(props.owner.id)}>Remove</button>
      </div>
    </div>
  );
};

export default OwnerCard;