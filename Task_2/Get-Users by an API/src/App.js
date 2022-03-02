import React, { useState } from "react";
import Navbar from "./Navbar";
import Layout from "./Layout";
function App() {
  const [Users, setUsers] = useState([]);
  let LoaderDis;

  async function GridShow(bool) {
    LoaderDis = true;
    if (bool === true) {
      await fetch("https://reqres.in/api/users?page=1")
        .then((response) => response.json())
        .then((res) => {
          setUsers(res.data);
        });
    }

    LoaderDis = false;
  }

  return (
    <div>
      <Navbar show={GridShow} />
      <div style={{ display: LoaderDis ? "flex" : "none", justifyContent: "centre" }}>Loading Users...</div>
      {Users.map((data, index) => {
        return <Layout key={index} User={data} />;
      })}
    </div>
  );
}

export default App;
