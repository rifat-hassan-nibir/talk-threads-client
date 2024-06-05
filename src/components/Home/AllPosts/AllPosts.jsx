import { useEffect, useState } from "react";
import Gap from "../../Gap";
import SectionTitle from "../../SectionTitle";
import PostCard from "./PostCard";
import axios from "axios";

const AllPosts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/posts`);
    setPosts(data);
  };

  return (
    <div className="py-4">
      <div className="flex justify-between items-start">
        <SectionTitle title={"All Posts"}></SectionTitle>

        {/* Filter by popularity */}
        <button className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-primary rounded-md hover:bg-secondary transition-all">
          Sort By Popularity
        </button>
      </div>

      <Gap></Gap>

      <div className="flex flex-col gap-5 max-h-[80vh] overflow-auto">
        {posts?.map((post) => (
          <PostCard post={post} key={post._id}></PostCard>
        ))}
      </div>
    </div>
  );
};

export default AllPosts;
