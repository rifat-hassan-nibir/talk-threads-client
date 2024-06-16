import { FacebookIcon, FacebookShareButton, LinkedinIcon, LinkedinShareButton, TwitterIcon, TwitterShareButton } from "react-share";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { IoShareSocialOutline } from "react-icons/io5";
import LoadingSpinner from "../components/Common/LoadingSpinner";
import ErrorMessage from "../components/Common/ErrorMessage";
import Tag from "../components/Common/Tag";
import SectionTitle from "../components/Common/SectionTitle";
import AllComments from "../components/SinglePost/AllComments";
import Gap from "../components/Common/Gap";
import { useContext, useState } from "react";
import AddComment from "../components/SinglePost/AddComment";
import { AuthContext } from "../providers/AuthProvider";
import toast from "react-hot-toast";

const SinglePost = () => {
  const { id } = useParams();
  const [reload, setReload] = useState(false);
  const { user } = useContext(AuthContext);

  // load post data from server
  const {
    data: post = {},
    isPending,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["post", id],
    queryFn: async () => {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/post/${id}`);
      return data;
    },
  });

  // change upvote or downvote
  const { mutateAsync: updateVote } = useMutation({
    mutationFn: async (voteType) => {
      const { data } = await axios.patch(`${import.meta.env.VITE_API_URL}/update-vote/${id}?vote=${voteType}`);
      return data;
    },
    onSuccess: (data) => {
      if (data.modifiedCount > 0) {
        toast.success("Vote added");
        refetch();
      }
    },
  });

  const handleVote = (vote) => {
    try {
      updateVote(vote);
    } catch (error) {
      toast.error(error.message);
    }
  };

  if (isPending) return <LoadingSpinner />;
  if (isError && error) return <ErrorMessage error={error} />;

  const { _id, post_title, post_description, date, tag, upvote, downvote, authorInfo } = post;

  return (
    <div className="bg-slate-200 lg:py-14 py-10">
      <div className="container lg:max-w-4xl mx-auto flex flex-col lg:gap-10 gap-6 px-4 lg:px-0">
        {/* Blog Article  */}
        <div className="bg-white w-full rounded-lg border px-6 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-10 mx-auto h-fit">
          <div>
            {/* Avatar Media  */}
            <div className="flex justify-between items-center mb-6">
              <div className="flex w-full sm:items-center gap-x-5 sm:gap-x-3">
                <div className="flex-shrink-0">
                  <img className="size-12 rounded-full" src={authorInfo.photo} alt="Image Description" />
                </div>

                <div className="grow">
                  <div className="flex justify-between items-center gap-x-2">
                    <div>
                      {/* Tooltip  */}
                      <div className="hs-tooltip [--trigger:hover] [--placement:bottom] inline-block">
                        <div className="hs-tooltip-toggle sm:mb-1 block text-start cursor-pointer">
                          <span className="font-semibold text-gray-800 dark:text-neutral-200">{authorInfo.name}</span>
                        </div>
                      </div>
                      {/* End Tooltip  */}

                      <ul className="text-xs text-gray-500 dark:text-neutral-500">
                        <li className="inline-block relative pe-6 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-2 before:-translate-y-1/2 before:size-1 before:bg-gray-300 before:rounded-full dark:text-neutral-400 dark:before:bg-neutral-600">
                          {new Date(date).toLocaleDateString()}
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

                <p className="text-lg text-gray-800 dark:text-neutral-200 text-justify">{post_description}</p>
              </div>
            </div>
            {/* End Content  */}

            {/* Share Group  */}
            <div className="pb-8 text-center mt-6">
              <div className="inline-block bg-white shadow-md rounded-full py-3 px-4 dark:bg-neutral-800">
                <div className="flex justify-center flex-wrap gap-3 items-center gap-x-1.5">
                  {/* Button  */}
                  <div className="inline-block">
                    <button
                      type="button"
                      onClick={() => handleVote("upvote")}
                      className="flex items-center gap-x-2 text-sm text-gray-500 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                    >
                      <AiOutlineLike className="size-5" />
                      {upvote}
                    </button>
                  </div>
                  {/* Button  */}

                  <div className="block h-3 border-e border-gray-300 mx-3 dark:border-neutral-600"></div>

                  {/* Button  */}
                  <div className=" inline-block">
                    <button
                      type="button"
                      onClick={() => handleVote("downvote")}
                      className="flex items-center gap-x-2 text-sm text-gray-500 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                    >
                      <AiOutlineDislike className="size-5" />
                      {downvote}
                    </button>
                  </div>
                  {/* Button  */}

                  <div className="block h-3 border-e border-gray-300 mx-3 dark:border-neutral-600"></div>

                  {/* Button  */}
                  <div className="relative inline-flex gap-3">
                    <p className="hs-dropdown-toggle flex items-center gap-x-2 text-sm text-gray-500 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200">
                      <IoShareSocialOutline className="size-5" />
                      Share to:
                    </p>

                    <FacebookShareButton url={`${import.meta.env.VITE_API_URL}/post/${id}`}>
                      <FacebookIcon size={32} round={true}></FacebookIcon>
                    </FacebookShareButton>

                    <TwitterShareButton url={`${import.meta.env.VITE_API_URL}/post/${id}`}>
                      <TwitterIcon size={32} round={true}></TwitterIcon>
                    </TwitterShareButton>

                    <LinkedinShareButton url={`${import.meta.env.VITE_API_URL}/post/${id}`}>
                      <LinkedinIcon size={32} round={true}></LinkedinIcon>
                    </LinkedinShareButton>
                  </div>
                  {/* Button  */}
                </div>
              </div>

              {/* Comments Section */}
              {user ? (
                <div className="mt-[50px]">
                  <AddComment post_id={_id} post_title={post_title} author_info={authorInfo} reload={reload} setReload={setReload} />
                </div>
              ) : (
                <p className="mt-10 text-xl">
                  Please{" "}
                  <Link className="text-blue-500 underline font-semibold" to="/join-us">
                    Login
                  </Link>{" "}
                  to comment on a post
                </p>
              )}
            </div>
            {/* End Share Group  */}
          </div>
        </div>

        {/* Comments section */}
        <div className="bg-white w-full rounded-lg border px-6 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto max-h-[600px] overflow-y-auto">
          <SectionTitle title={"Comments"}></SectionTitle>
          <Gap></Gap>
          <AllComments post_id={_id} refetch={refetch} reload={reload}></AllComments>
        </div>
      </div>
      {/* End Blog Article  */}
    </div>
  );
};

export default SinglePost;
