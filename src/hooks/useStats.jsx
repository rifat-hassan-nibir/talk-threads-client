import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useStats = () => {
  const {
    data: stats = {},
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["stats"],
    queryFn: async () => {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/admin-stats`);
      return data;
    },
  });
  return [stats, isPending, isError, error];
};

export default useStats;
