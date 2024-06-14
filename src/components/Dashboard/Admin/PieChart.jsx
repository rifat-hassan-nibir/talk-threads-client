import Chart from "react-google-charts";
import useStats from "../../../hooks/useStats";

const PieChart = () => {
  const [stats] = useStats();
  const data = [
    ["Name", "Number"],
    ["Total Users", stats.usersCount],
    ["Total Posts", stats.postsCount],
    ["Total Comments", stats.commentsCount],
  ];

  return (
    <div className="border rounded-lg">
      <Chart chartType="PieChart" data={data} width={"100%"} height={"400px"} />
    </div>
  );
};

export default PieChart;
