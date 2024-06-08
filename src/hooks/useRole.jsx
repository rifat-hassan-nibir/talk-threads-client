import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useRole = () => {
  const { user, loading } = useContext(AuthContext);

  //   fetch user info using logged in user email
  const { data: role = "", isPending } = useQuery({
    queryKey: ["role", user?.email],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/user/${user?.email}`);
      return data.role;
    },
  });

  return { role, isPending };
};

export default useRole;
