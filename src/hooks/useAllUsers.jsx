import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useAllUsers = () => {
  const {
    data: users = [],
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/users`);
      return data;
    },
  });

  return [users, isPending, isError, error];
};

export default useAllUsers;
