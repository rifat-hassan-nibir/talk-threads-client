import AddTags from "../../../components/Dashboard/Admin/AddTags";
import AdminStatistics from "../../../components/Dashboard/Admin/AdminStatistics";
import PieChart from "../../../components/Dashboard/Admin/PieChart";

const AdminProfile = () => {
  return (
    <div>
      <AdminStatistics />
      <div className="flex lg:flex-row flex-col container mx-auto">
        <div className="lg:w-[50%] shadow-lg shadow-gray-100">
          <PieChart />
        </div>
        <div className="lg:w-[50%]">
          <AddTags />
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
