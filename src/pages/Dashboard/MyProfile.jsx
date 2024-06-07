/* eslint-disable react/prop-types */
import { useContext } from "react";
import UserInfo from "../../components/Dashboard/Common/UserInfo";
import { AuthContext } from "../../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LoadingSpinner from "../../components/LoadingSpinner";
import ErrorMessage from "../../components/ErrorMessage";
import PostCard from "../../components/Home/AllPosts/PostCard";

const MyProfile = () => {
  const { user } = useContext(AuthContext);

  const {
    data: myPosts = [],
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["my-posts"],
    queryFn: async () => {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/my-posts/${user?.email}?dateSort=descending`);
      return data;
    },
  });

  if (isPending) return <LoadingSpinner />;
  if (isError && error) return <ErrorMessage error={error} />;
  return (
    <div>
      <UserInfo></UserInfo>
      {myPosts.slice(0, 3).map((post) => (
        <PostCard post={post}></PostCard>
      ))}
    </div>
  );
};

export default MyProfile;
