/* eslint-disable react/prop-types */
import PostCard from "./PostCard";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Gap from "../../Common/Gap";
import LoadingSpinner from "../../Common/LoadingSpinner";
import ErrorMessage from "../../Common/ErrorMessage";

const AllPosts = ({ search }) => {
  const {
    data: posts = [],
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["posts", search],
    queryFn: async () => {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/posts?search=${search}`);
      return data;
    },
  });

  if (isPending) return <LoadingSpinner />;
  if (isError && error) return <ErrorMessage error={error} />;

  return (
    <div>
      <Gap></Gap>

      <div className="flex flex-col gap-5 max-h-[75vh] overflow-auto">
        {posts.length > 0 ? (
          posts?.map((post) => <PostCard post={post} key={post._id}></PostCard>)
        ) : (
          <p className="text-center text-xl lg:mt-[100px] mt-[30px]">No posts found containing this tag</p>
        )}
      </div>
    </div>
  );
};

export default AllPosts;
