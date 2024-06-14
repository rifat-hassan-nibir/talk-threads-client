import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../components/Common/LoadingSpinner";
import ErrorMessage from "../components/Common/ErrorMessage";
import SectionTitle from "../components/Common/SectionTitle";
import AllCommentsTable from "../components/Tables/AllCommentsTable";

const AllCommentsPage = () => {
  const { id } = useParams();
  console.log(id);

  const {
    data: comments = [],
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["comments", id],
    queryFn: async () => {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/comments/${id}`);
      return data;
    },
  });

  if (isPending) return <LoadingSpinner />;
  if (isError && error) return <ErrorMessage error={error} />;

  return (
    <div className="container mx-auto">
      {comments.length > 0 ? (
        <AllCommentsTable comments={comments} />
      ) : (
        <div className="flex justify-center items-center h-[calc(100vh-144px)]">
          <SectionTitle title={"No Comments"}></SectionTitle>
        </div>
      )}
    </div>
  );
};

export default AllCommentsPage;
