/* eslint-disable react/prop-types */
import PostCard from "./PostCard";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Gap from "../../Common/Gap";
import LoadingSpinner from "../../Common/LoadingSpinner";
import ErrorMessage from "../../Common/ErrorMessage";
import { useEffect, useState } from "react";
import Pagination from "../../Common/Pagination";

const AllPosts = ({ search, popularPosts }) => {
  console.log(popularPosts);
  // for pagination
  // eslint-disable-next-line no-unused-vars
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [postsCount, setPostsCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  // get all posts count
  useEffect(() => {
    const getPostsCount = async () => {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/posts-count?search=${search}`);
      setPostsCount(data.count);
      setCurrentPage(1);
    };
    getPostsCount();
  }, [search, postsCount, popularPosts]);

  // set current page number
  const handlePaginationButton = (pageNum) => {
    setCurrentPage(pageNum);
  };

  // get all posts
  const {
    data: posts = [],
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["posts", search, currentPage, postsCount, popularPosts],
    queryFn: async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/posts?search=${search}&page=${currentPage}&size=${itemsPerPage}&popular=${popularPosts}`
      );
      return data;
    },
  });

  if (isPending) return <LoadingSpinner />;
  if (isError && error) return <ErrorMessage error={error} />;

  return (
    <div>
      <Gap></Gap>

      <div className="flex flex-col gap-5 h-[70vh] overflow-auto">
        {posts.length > 0 ? (
          posts?.map((post) => <PostCard post={post} key={post._id}></PostCard>)
        ) : (
          <p className="text-center text-xl lg:mt-[100px] mt-[30px]">No posts found containing this tag</p>
        )}
      </div>

      <div className="mt-4">
        <Pagination
          itemsCount={postsCount}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          handlePaginationButton={handlePaginationButton}
        ></Pagination>
      </div>
    </div>
  );
};

export default AllPosts;
