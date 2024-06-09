import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useAnnouncements = () => {
  const {
    data: announcements = [],
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["announcements"],
    queryFn: async () => {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/announcements`);
      return data;
    },
  });

  return [announcements, isPending, isError, error];
};

export default useAnnouncements;
