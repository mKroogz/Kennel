import React from "react";
import { Link } from "react-router-dom";

const LocationCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>
        {props.kennelLocation.area}: <span className="card-locname">{props.kennelLocation.address}</span>
        </h3>
        <Link to={`/locations/${props.kennelLocation.id}`}>
          <button>Details</button>
        </Link>
        <button
          type="button"
          onClick={() => props.history.push(`/locations/${props.kennelLocation.id}/edit`)}
        >
          Edit
        </button>
        <button type="button" onClick={() => props.deleteLocation(props.kennelLocation.id)}>Close</button>
      </div>
    </div>
  );
};

export default LocationCard;