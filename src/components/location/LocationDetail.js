import React, { useState, useEffect } from "react";
import LocationManager from "../../modules/LocationManager";
import "./LocationDetail.css";

const LocationDetail = props => {
  const [location, setLocation] = useState({ area: "", address: "" });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //get(id) from LocationManager and hang on to the data; put it into state
    LocationManager.get(props.locationId).then(location => {
      setLocation({
        area: location.area,
        address: location.address
      });
      setIsLoading(false);
    });
  }, [props.locationId]);

  const handleDelete = () => {
  //invoke the delete function in LocationManger and re-direct to the Location list.
  setIsLoading(true);
  LocationManager.delete(props.locationId).then(() =>
    props.history.push("/locations")
  );
};

  return (
    <div className="card">
      <div className="card-content">
        <h3>
          Area: <span style={{ color: "darkslategrey" }}>{location.area}</span>
        </h3>
        <p>Address: {location.address}</p>
        <button type="button" disabled={isLoading} onClick={handleDelete}>
          Close
        </button>
      </div>
    </div>
  );
};

export default LocationDetail;