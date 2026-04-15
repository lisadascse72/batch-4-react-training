import UserProfile from "./UserProfile";

const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>

      <UserProfile username="Alex" age={25} isAdmin={true} />
      <UserProfile username="Lisa" age={22} isAdmin={false} />
      <UserProfile username="John" age={30} />
    </div>
  );
};

export default Dashboard;