import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const usePostsCount = () => {
  const { user } = useContext(AuthContext);

  const {
    data: postsCount = 0,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["postsCount", user?.email],
    queryFn: async () => {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/posts-count/${user?.email}`);
      return data.count;
    },
  });

  return [postsCount, isPending, isError, error];
};

export default usePostsCount;
