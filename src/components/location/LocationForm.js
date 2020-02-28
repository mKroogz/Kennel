import React, { useState } from "react";
import LocationManager from "../../modules/LocationManager";
import "./LocationForm.css";

const LocationForm = props => {
  const [location, setLocation] = useState({ area: "", address: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...location };
    stateToChange[evt.target.id] = evt.target.value;
    setLocation(stateToChange);
  };

  /*  Local method for validation, set loadingStatus, create Location      object, invoke the LocationManager post method, and redirect to the full Location list
   */
  const constructNewLocation = evt => {
    evt.preventDefault();
    if (location.area === "" || location.address === "") {
      window.alert("Please input an location area and address");
    } else {
      setIsLoading(true);
      // Create the location and redirect user to location list
      LocationManager.post(location).then(() =>
        props.history.push("/locations")
      );
    }
  };

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="area"
              placeholder="Location area"
            />
            <label htmlFor="area">Area</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="address"
              placeholder="address"
            />
            <label htmlFor="address">address</label>
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={constructNewLocation}
            >
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default LocationForm;
