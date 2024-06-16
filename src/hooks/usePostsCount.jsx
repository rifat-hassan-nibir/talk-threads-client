import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const usePostsCount = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const {
    data: postsCount = 0,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["postsCount", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/posts-count/${user?.email}`);
      return data.count;
    },
  });

  return [postsCount, isPending, isError, error];
};

export default usePostsCount;
