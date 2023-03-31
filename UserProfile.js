import React from "react";

function UserProfile({ user }) {
  return (
    <div className="user-profile">
      <img src={`https://i.pravatar.cc/150?u=${user.email}`} alt="Avatar" />
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <p>{user.phone}</p>
      <p>
        {user.address.street}, {user.address.suite}, {user.address.city}{" "}
        {user.address.zipcode}
      </p>
      <p>{user.website}</p>
      <p>{user.company.name}</p>
    </div>
  );
}

export default UserProfile;
