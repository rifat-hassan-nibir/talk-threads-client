import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useTags = () => {
  const {
    data: tags = [],
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["tags"],
    queryFn: async () => {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/tags`);
      return data;
    },
  });

  return [tags, isPending, isError, error];
};

export default useTags;
