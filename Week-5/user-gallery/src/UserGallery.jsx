import { use } from "react";

/* =========================
   Fetch function
========================= */

const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json());

/* =========================
   User Gallery Component
========================= */

const UserGallery = () => {
  const users = use(fetchUsers);

  return (
    <div>
      <h2>User Gallery</h2>

      {users.map((user) => (
        <div
          key={user.id}
          style={{
            border: "1px solid black",
            padding: "10px",
            margin: "10px",
          }}
        >
          <h3>{user.name}</h3>
          <p>{user.email}</p>
          <p>{user.company.name}</p>
        </div>
      ))}
    </div>
  );
};

export default UserGallery;