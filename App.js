import React, { useState, useEffect } from "react";
import UserProfile from "./UserProfile";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="App">
      {users.map((user) => (
        <UserProfile key={user.id} user={user} />
      ))}
    </div>
  );
}

export default App;
