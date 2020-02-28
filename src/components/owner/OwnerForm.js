import React, { useState } from "react";
import OwnerManager from "../../modules/OwnerManager";
import "./OwnerForm.css";

const OwnerForm = props => {
  const [owner, setOwner] = useState({ name: "", description: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...owner };
    stateToChange[evt.target.id] = evt.target.value;
    setOwner(stateToChange);
  };

  /*  Local method for validation, set loadingStatus, create Owner      object, invoke the OwnerManager post method, and redirect to the full Owner list
   */
  const constructNewOwner = evt => {
    evt.preventDefault();
    if (owner.name === "" || owner.description === "") {
      window.alert("Please input an owner name and description");
    } else {
      setIsLoading(true);
      // Create the owner and redirect user to owner list
      OwnerManager.post(owner).then(() =>
        props.history.push("/owners")
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
              id="name"
              placeholder="Owner name"
            />
            <label htmlFor="name">name</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="description"
              placeholder="description"
            />
            <label htmlFor="description">description</label>
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={constructNewOwner}
            >
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default OwnerForm;
