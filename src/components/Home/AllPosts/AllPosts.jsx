import PostCard from "./PostCard";

const AllPosts = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="lg:text-2xl text-xl font-bold">All Posts (5)</h2>
        {/* Filter by popularity */}
        <button className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-primary rounded-md hover:bg-secondary transition-all">
          Sort By Popularity
        </button>
      </div>

      <div className="my-8"></div>

      <div className="flex flex-col gap-5">
        <PostCard></PostCard>
        <PostCard></PostCard>
        <PostCard></PostCard>
        <PostCard></PostCard>
        <PostCard></PostCard>
      </div>
    </div>
  );
};

export default AllPosts;