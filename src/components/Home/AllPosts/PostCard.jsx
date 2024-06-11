/* eslint-disable react/prop-types */
import { FaRegCommentAlt } from "react-icons/fa";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
  const { _id, post_title, post_description, tag, date, upvote, downvote, authorInfo } = post;

  return (
    <Link to={`/post/${_id}`} className="">
      <div className="max-w-2xl lg:px-8 px-6 lg:py-4 py-3 border bg-gray-50 rounded-lg shadow-lg shadow-gray-100">
        <div className="flex items-center justify-between ">
          <span className="text-sm font-light text-gray-600 ">{new Date(date).toLocaleDateString()}</span>
          <div className="flex gap-2">
            <p className="px-3 py-1 text-sm text-gray-100 transition-colors duration-300 transform bg-secondary rounded">{tag}</p>
          </div>
        </div>

        <div className="mt-2">
          <h3 className="lg:text-xl text-lg font-bold text-gray-700">{post_title}</h3>
          <p className="mt-2 text-gray-600">{post_description.slice(0, 200)}...</p>
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center">
            <img className="hidden object-cover w-10 h-10 mr-4 rounded-full sm:block" src={authorInfo.photo} alt="avatar" />
            <p className="font-bold text-gray-700">{authorInfo.name}</p>
          </div>

          {/* Comments */}
          <div className="flex items-center gap-2">
            <FaRegCommentAlt className="size-4" />
            <p>5</p>
          </div>

          {/* Votes */}
          <div className="flex gap-4 items-center">
            <div className="flex gap-2">
              <AiOutlineLike className="size-5" />
              <p>{upvote}</p>
            </div>
            <div className="flex gap-2">
              <AiOutlineDislike className="size-5" />
              <p>{downvote}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
