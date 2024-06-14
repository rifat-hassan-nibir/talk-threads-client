/* eslint-disable react/prop-types */
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
const MyPostsRow = ({ post, handleDelete }) => {
  const { _id, post_title, upvote, downvote } = post;
  return (
    <>
      <tr>
        {/* Post Title */}
        <td className="size-px whitespace-nowrap">
          <div className="px-6 py-3">
            <span className="text-sm text-gray-600">{post_title}</span>
          </div>
        </td>
        {/* Upvote */}
        <td className="size-px whitespace-nowrap">
          <div className="px-6 py-3">
            <div className="flex items-center gap-x-2">
              <div className="grow">
                <span className="text-sm text-gray-600">{upvote}</span>
              </div>
            </div>
          </div>
        </td>
        {/* Downvote */}
        <td className="size-px whitespace-nowrap">
          <div className="px-6 py-3">
            <div className="flex items-center gap-x-2">
              <div className="grow">
                <span className="text-sm text-gray-600">{downvote}</span>
              </div>
            </div>
          </div>
        </td>
        {/* Comments */}
        <td className="size-px whitespace-nowrap">
          <div className="px-6 py-3">
            <Link
              to={`/comments/${_id}`}
              className="py-2 px-5 inline-flex items-center gap-x-2 text-sm rounded-md border border-gray-200 bg-primary text-white shadow-sm hover:bg-secondary transition-all"
            >
              Comments
            </Link>
          </div>
        </td>
        {/* Action */}
        <td className="size-px whitespace-nowrap">
          <div className="px-6 py-3">
            <button
              onClick={() => handleDelete(_id)}
              className="py-2 px-5 hover:cursor-pointer inline-flex items-center gap-x-1 text-sm font-medium bg-red-500 hover:bg-red-400 transition-all text-white rounded-md"
            >
              <FaTrashAlt />
            </button>
          </div>
        </td>
      </tr>
    </>
  );
};

export default MyPostsRow;
