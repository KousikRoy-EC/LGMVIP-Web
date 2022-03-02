import React, { useState } from "react";
import Form from "./Form";
import Card from "./Card";
function App() {
  const [User, setUser] = useState([]);

  function updateUser(newUser) {
    return setUser((oldUser) => [...oldUser, newUser]);
  }
  return (
    <div>
      <Form addUser={updateUser} />
      {User.map((data, index) => {
        return <Card info={data} key={index} />;
      })}
    </div>
  );
}

export default App;
