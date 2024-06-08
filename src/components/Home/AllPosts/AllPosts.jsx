import PostCard from "./PostCard";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Gap from "../../Common/Gap";
import LoadingSpinner from "../../Common/LoadingSpinner";
import ErrorMessage from "../../Common/ErrorMessage";

const AllPosts = () => {
  const {
    data: posts = [],
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/posts`);
      return data;
    },
  });

  if (isPending) return <LoadingSpinner />;
  if (isError && error) return <ErrorMessage error={error} />;

  return (
    <div>
      <Gap></Gap>

      <div className="flex flex-col gap-5 max-h-[75vh] overflow-auto">
        {posts?.map((post) => (
          <PostCard post={post} key={post._id}></PostCard>
        ))}
      </div>
    </div>
  );
};

export default AllPosts;
