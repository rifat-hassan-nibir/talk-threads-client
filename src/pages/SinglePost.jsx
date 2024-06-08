import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { IoShareSocialOutline } from "react-icons/io5";
import LoadingSpinner from "../components/Common/LoadingSpinner";
import ErrorMessage from "../components/Common/ErrorMessage";
import Tag from "../components/Common/Tag";

const SinglePost = () => {
  const { id } = useParams();

  // load post data from server
  const {
    data: post = {},
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["post"],
    queryFn: async () => {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/post/${id}`);
      return data;
    },
  });

  if (isPending) return <LoadingSpinner />;
  if (isError && error) return <ErrorMessage error={error} />;

  const { _id, author_image, author_name, post_title, post_description, post_time, tag, upvote, downvote } = post;

  return (
    <div>
      {/* Blog Article  */}
      <div className="max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-2xl">
          {/* Avatar Media  */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex w-full sm:items-center gap-x-5 sm:gap-x-3">
              <div className="flex-shrink-0">
                <img className="size-12 rounded-full" src={author_image} alt="Image Description" />
              </div>

              <div className="grow">
                <div className="flex justify-between items-center gap-x-2">
                  <div>
                    {/* Tooltip  */}
                    <div className="hs-tooltip [--trigger:hover] [--placement:bottom] inline-block">
                      <div className="hs-tooltip-toggle sm:mb-1 block text-start cursor-pointer">
                        <span className="font-semibold text-gray-800 dark:text-neutral-200">{author_name}</span>

                        {/* Dropdown Card  */}
                        <div
                          className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 max-w-xs cursor-default bg-gray-900 divide-y divide-gray-700 shadow-lg rounded-xl dark:bg-neutral-950 dark:divide-neutral-700"
                          role="tooltip"
                        >
                          {/* Body  */}
                          <div className="p-4 sm:p-5">
                            <div className="mb-2 flex w-full sm:items-center gap-x-5 sm:gap-x-3">
                              <div className="grow">
                                <p className="text-lg font-semibold text-gray-200 dark:text-neutral-200">Leyla Ludic</p>
                              </div>
                            </div>
                            <p className="text-sm text-gray-400 dark:text-neutral-400">
                              Leyla is a Customer Success Specialist at Preline and spends her time speaking to in-house recruiters all over
                              the world.
                            </p>
                          </div>
                          {/* End Body  */}
                        </div>
                        {/* End Dropdown Card  */}
                      </div>
                    </div>
                    {/* End Tooltip  */}

                    <ul className="text-xs text-gray-500 dark:text-neutral-500">
                      <li className="inline-block relative pe-6 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-2 before:-translate-y-1/2 before:size-1 before:bg-gray-300 before:rounded-full dark:text-neutral-400 dark:before:bg-neutral-600">
                        {new Date(post_time).toLocaleDateString()}
                      </li>
                    </ul>
                  </div>

                  {/* Button Group  */}
                  <div>
                    <Tag tagName={tag}></Tag>
                  </div>
                  {/* End Button Group  */}
                </div>
              </div>
            </div>
          </div>
          {/* End Avatar Media  */}

          {/* Content  */}
          <div className="space-y-5 md:space-y-8">
            <div className="space-y-3">
              <h2 className="text-2xl font-bold md:text-3xl dark:text-white">{post_title}</h2>

              <p className="text-lg text-gray-800 dark:text-neutral-200">{post_description}</p>
            </div>
          </div>
          {/* End Content  */}
        </div>
      </div>
      {/* End Blog Article  */}
      {/* Sticky Share Group  */}
      <div className="pb-8 text-center">
        <div className="inline-block bg-white shadow-md rounded-full py-3 px-4 dark:bg-neutral-800">
          <div className="flex items-center gap-x-1.5">
            {/* Button  */}
            <div className="hs-tooltip inline-block">
              <button
                type="button"
                className="flex items-center gap-x-2 text-sm text-gray-500 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
              >
                <AiOutlineLike className="size-5" />
                {upvote}
              </button>
            </div>
            {/* Button  */}

            <div className="block h-3 border-e border-gray-300 mx-3 dark:border-neutral-600"></div>

            {/* Button  */}
            <div className="hs-tooltip inline-block">
              <button
                type="button"
                className="hs-tooltip-toggle flex items-center gap-x-2 text-sm text-gray-500 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
              >
                <AiOutlineDislike className="size-5" />
                {downvote}
              </button>
            </div>
            {/* Button  */}

            <div className="block h-3 border-e border-gray-300 mx-3 dark:border-neutral-600"></div>

            {/* Button  */}
            <div className="hs-dropdown relative inline-flex">
              <button
                type="button"
                id="blog-article-share-dropdown"
                className="hs-dropdown-toggle flex items-center gap-x-2 text-sm text-gray-500 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
              >
                <IoShareSocialOutline className="size-5" />
                Share
              </button>
            </div>
            {/* Button  */}
          </div>
        </div>
      </div>
      {/* End Sticky Share Group  */}
    </div>
  );
};

export default SinglePost;
