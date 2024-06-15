import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LoadingSpinner from "../../../components/Common/LoadingSpinner";
import ErrorMessage from "../../../components/Common/ErrorMessage";
import ReportedCommentsTable from "../../../components/Tables/ReportedCommentsTable";

const ReportedComments = () => {
  const {
    data: reportedComments = [],
    isPending,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["reportedComments"],
    queryFn: async () => {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/get-reported-comments`);
      return data;
    },
  });

  if (isPending) return <LoadingSpinner />;
  if (isError && error) return <ErrorMessage error={error} />;

  return (
    <div>
      <ReportedCommentsTable reportedComments={reportedComments} refetch={refetch} />
    </div>
  );
};

export default ReportedComments;
