const AdminPanel = () => {
  return <h2>👑 Welcome to Admin Panel</h2>;
};

const UserGateway = () => {
  const user = {
    name: "Alex",
    role: "admin",
    status: "admin",
  };

  // Condition 1: Suspended user
  if (user.status === "suspended") {
    return <h2>⚠️ Contact Support</h2>;
  }

  // Condition 2: Admin user
  if (user.role === "admin") {
    return <AdminPanel />;
  }

  // Default user
  return <h2>Welcome {user.name}</h2>;
};

export default UserGateway;