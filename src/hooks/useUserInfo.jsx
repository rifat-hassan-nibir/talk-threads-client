import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const useUserInfo = () => {
  const { user } = useContext(AuthContext);

  const {
    data: userInfo = {},
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["userInfo", user?.email],
    queryFn: async () => {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/user/${user?.email}`);
      return data;
    },
  });

  return [userInfo, isPending, isError, error];
};

export default useUserInfo;
