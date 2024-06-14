import CommentModal from "../../Common/CommentModal";
import { Button } from "@headlessui/react";
import { useState } from "react";

/* eslint-disable react/prop-types */
const AllCommentsRow = ({ comment }) => {
  const { comment: user_comment, commenter_info } = comment;
  const [isOpen, setIsOpen] = useState(false);

  //   open modal
  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  return (
    <>
      <tr>
        {/* Post Title */}
        <td className="size-px whitespace-nowrap">
          <div className="px-6 py-3">
            <span className="text-sm text-gray-600">{commenter_info.email}</span>
          </div>
        </td>
        {/* Upvote */}
        <td className="size-px whitespace-nowrap">
          <div className="px-6 py-3">
            <div className="flex items-center gap-x-2">
              <div className="grow">
                <span className="text-sm text-gray-600">{user_comment.length > 20 ? user_comment.slice(0, 20) : ""}</span>
                <span className="text-sm text-gray-600">
                  {user_comment.length > 20 ? (
                    <Button onClick={open} className="text-blue-900 hover:underline">
                      ...Read More
                    </Button>
                  ) : (
                    ""
                  )}
                </span>
              </div>
            </div>

            {/* modal */}
            <CommentModal commenter_info={commenter_info} user_comment={user_comment} isOpen={isOpen} close={close} />
          </div>
        </td>

        {/* Downvote */}
        <td className="size-px whitespace-nowrap">
          <div className="px-6 py-3">
            <div className="flex items-center gap-x-2">
              <div className="grow">
                <span className="text-sm text-gray-600">5</span>
              </div>
            </div>
          </div>
        </td>
        {/* Comments */}
        <td className="size-px whitespace-nowrap">
          <div className="px-6 py-3">
            <button className="py-2 px-5 inline-flex items-center gap-x-2 text-sm rounded-md border border-gray-200 bg-primary text-white shadow-sm hover:bg-secondary transition-all">
              Comments
            </button>
          </div>
        </td>
      </tr>
    </>
  );
};

export default AllCommentsRow;
