import { FaRegCommentAlt } from "react-icons/fa";
import Gap from "../../Common/Gap";
import SectionTitle from "../../Common/SectionTitle";
import { LuUsers } from "react-icons/lu";
import { IoDocumentTextOutline } from "react-icons/io5";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LoadingSpinner from "../../Common/LoadingSpinner";
import ErrorMessage from "../../Common/ErrorMessage";

const AdminStatistics = () => {
  const {
    data: stats = {},
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["stats"],
    queryFn: async () => {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/admin-stats`);
      return data;
    },
  });

  // Handle loading data and error
  if (isPending) return <LoadingSpinner />;
  if (isError && error) return <ErrorMessage error={error} />;

  return (
    <div>
      {/* Card Section  */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <SectionTitle title={"Statistics"}></SectionTitle>
        <Gap></Gap>

        {/* Grid  */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Card  */}
          <div className="flex flex-col bg-white border shadow-lg shadow-gray-100 rounded-xl">
            <div className="p-4 md:p-5 flex gap-x-4">
              <div className="flex-shrink-0 flex justify-center items-center size-[46px] bg-gray-100 rounded-lg">
                <LuUsers className="size-5" />
              </div>

              <div className="grow">
                <div className="flex items-center gap-x-2">
                  <p className="text-xs uppercase tracking-wide text-gray-500">Total users</p>
                  <div className="hs-tooltip"></div>
                </div>
                <div className="mt-1 flex items-center gap-x-2">
                  <h3 className="text-xl sm:text-2xl font-medium text-gray-800">{stats?.usersCount}</h3>
                </div>
              </div>
            </div>
          </div>
          {/* End Card  */}

          {/* Card  */}
          <div className="flex flex-col bg-white border shadow-lg shadow-gray-100 rounded-xl">
            <div className="p-4 md:p-5 flex gap-x-4">
              <div className="flex-shrink-0 flex justify-center items-center size-[46px] bg-gray-100 rounded-lg">
                <IoDocumentTextOutline className="size-5" />
              </div>

              <div className="grow">
                <div className="flex items-center gap-x-2">
                  <p className="text-xs uppercase tracking-wide text-gray-500">Total Posts</p>
                </div>
                <div className="mt-1 flex items-center gap-x-2">
                  <h3 className="text-xl sm:text-2xl font-medium text-gray-800">{stats?.postsCount}</h3>
                </div>
              </div>
            </div>
          </div>
          {/* End Card  */}

          {/* Card  */}
          <div className="flex flex-col bg-white border shadow-lg shadow-gray-100 rounded-xl">
            <div className="p-4 md:p-5 flex gap-x-4">
              <div className="flex-shrink-0 flex justify-center items-center size-[46px] bg-gray-100 rounded-lg">
                <FaRegCommentAlt className="size-5" />
              </div>

              <div className="grow">
                <div className="flex items-center gap-x-2">
                  <p className="text-xs uppercase tracking-wide text-gray-500">Total Comments</p>
                </div>
                <div className="mt-1 flex items-center gap-x-2">
                  <h3 className="text-xl sm:text-2xl font-medium text-gray-800">{stats?.commentsCount}</h3>
                </div>
              </div>
            </div>
          </div>
          {/* End Card  */}
        </div>
        {/* End Grid  */}
      </div>
      {/* End Card Section  */}
    </div>
  );
};

export default AdminStatistics;
