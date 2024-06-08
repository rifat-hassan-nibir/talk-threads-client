import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LoadingSpinner from "../../../components/LoadingSpinner";
import ErrorMessage from "../../../components/ErrorMessage";
import SectionTitle from "../../../components/SectionTitle";
import Gap from "../../../components/Gap";
import PostCard from "../../../components/Home/AllPosts/PostCard";

const UserProfile = () => {
  const { user } = useContext(AuthContext);

  const {
    data: myPosts = [],
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["my-posts", user?.email],
    queryFn: async () => {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/my-posts/${user?.email}?dateSort=descending`);
      return data;
    },
  });

  if (isPending) return <LoadingSpinner />;
  if (isError && error) return <ErrorMessage error={error} />;

  return (
    <div>
      <SectionTitle title={"Recent 3 Posts"}></SectionTitle>
      <Gap></Gap>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-5">
        {myPosts.slice(0, 3).map((post, index) => (
          <PostCard post={post} key={index}></PostCard>
        ))}
      </div>
    </div>
  );
};

export default UserProfile;
