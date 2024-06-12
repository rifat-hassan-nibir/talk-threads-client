/* eslint-disable react/prop-types */
import { useQuery } from "@tanstack/react-query";
import CommentCard from "./CommentCard";
import axios from "axios";
import LoadingSpinner from "../Common/LoadingSpinner";
import ErrorMessage from "../Common/ErrorMessage";

const AllComments = ({ post_id, reload }) => {
  const {
    data: comments = [],
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["comments", reload],
    queryFn: async () => {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/comments/${post_id}`);
      return data;
    },
  });

  if (isPending) return <LoadingSpinner />;
  if (isError && error) return <ErrorMessage error={error} />;

  return (
    <div className="flex flex-col gap-6">
      {comments.length > 0 ? (
        <div className="space-y-4">
          {comments.map((comment) => (
            <CommentCard comment={comment} key={comment._id}></CommentCard>
          ))}
        </div>
      ) : (
        <p>No comments yet</p>
      )}
    </div>
  );
};

export default AllComments;
