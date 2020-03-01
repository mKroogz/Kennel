import React from "react";

const loginInfo = sessionStorage.getItem("credentials").slice(10)
const justEmail = loginInfo.split(`"`)

const Home = () => {
  return (
    <address>
      Visit Us at the Nashville North Location
      <br />
      500 Puppy Way
      <br />
      (You are logged in as: {justEmail[0]})
    </address>
  );
};

export default Home;