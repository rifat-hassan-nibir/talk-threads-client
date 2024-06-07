import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import LoadingSpinner from "../../components/LoadingSpinner";
import ErrorMessage from "../../components/ErrorMessage";
import { AuthContext } from "../../providers/AuthProvider";
import MyPostsRow from "../../components/TableRows/Common/MyPostsRow";

const MyPosts = () => {
  const { user } = useContext(AuthContext);

  const {
    data: myPosts = [],
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["my-posts"],
    queryFn: async () => {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/my-posts/${user?.email}`);
      return data;
    },
  });

  if (isPending) return <LoadingSpinner />;
  if (isError && error) return <ErrorMessage error={error} />;

  return (
    <div>
      {/* Table Section  */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Card  */}
        <div className="flex flex-col shadow-lg shadow-gray-100">
          <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
              <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-neutral-900 dark:border-neutral-700">
                {/* Header  */}
                <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-neutral-700">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-neutral-200">My Posts</h2>
                  </div>
                </div>
                {/* End Header  */}

                {/* Table  */}
                <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                  <thead className="bg-gray-50 dark:bg-neutral-900">
                    <tr>
                      {/* Post title */}
                      <th scope="col" className="px-6 py-3 text-center">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                            Post Title
                          </span>
                        </div>
                      </th>

                      {/* Upvote */}
                      <th scope="col" className="px-6 py-3 text-center">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">Upvote</span>
                        </div>
                      </th>

                      {/* Downvote */}
                      <th scope="col" className="px-6 py-3 text-center">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                            Downvote
                          </span>
                        </div>
                      </th>

                      {/* Comments */}
                      <th scope="col" className="px-6 py-3 text-center">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                            Comments
                          </span>
                        </div>
                      </th>

                      {/* Action */}
                      <th scope="col" className="px-6 py-3 text-center">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">Action</span>
                        </div>
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                    {myPosts.map((post) => (
                      <MyPostsRow
                        post_title={post.post_title}
                        post_description={post.post_description}
                        upvote={post.upvote}
                        downvote={post.downvote}
                        key={post._id}
                      />
                    ))}
                  </tbody>
                </table>
                {/* End Table  */}
              </div>
            </div>
          </div>
        </div>
        {/* End Card  */}
      </div>
      {/* End Table Section  */}
    </div>
  );
};

export default MyPosts;
