import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import StatusFooter from "./StatusFooter";

const Dashboard = () => {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <MainContent />
      </div>
      <StatusFooter />
    </div>
  );
};

export default Dashboard;