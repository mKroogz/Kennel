import { Route } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import AnimalDetail from "./animal/AnimalDetail";
import AnimalList from "./animal/AnimalList";
import LocationDetail from "./location/LocationDetail"
import LocationList from "./location/LocationList";
import EmployeeList from "./employee/EmployeeList";
import OwnerList from "./owner/OwnerList";

const ApplicationViews = () => {
  return (
    <React.Fragment>
      <Route
        exact
        path="/"
        render={props => {
          return <Home />;
        }}
      />
      {/* Make sure you add the `exact` attribute here */}
      <Route
        exact
        path="/animals"
        render={props => {
          return <AnimalList />;
        }}
      />
      <Route
        path="/animals/:animalId(\d+)"
        render={props => {
          // Pass the animalId to the AnimalDetailComponent
          return (
            <AnimalDetail animalId={parseInt(props.match.params.animalId)} 
            {...props}/>
          );
        }}
      />
      <Route
        exact
        path="/locations"
        render={props => {
          return <LocationList />;
        }}
      />
      <Route
        path="/locations/:locationId(\d+)"
        render={props => {
          // Pass the locationId to the LocationDetailComponent
          return (
            <LocationDetail locationId={parseInt(props.match.params.locationId)} 
            {...props}/>
          );
        }}
      />
      <Route
        exact
        path="/employees"
        render={props => {
          return <EmployeeList />;
        }}
      />
      <Route
        exact
        path="/owners"
        render={props => {
          return <OwnerList />;
        }}
      />
    </React.Fragment>
  );
};

export default ApplicationViews;
