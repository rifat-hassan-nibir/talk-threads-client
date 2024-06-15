import { Button } from "@headlessui/react";
import CommentModal from "../../Common/CommentModal";
import { useState } from "react";

/* eslint-disable react/prop-types */
const ReportedCommentsRow = ({ reportedComment }) => {
  const { commentInfo, feedbackValue } = reportedComment;
  const [isOpen, setIsOpen] = useState(false);
  console.log(commentInfo);

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
            <span className="text-sm text-gray-600">{commentInfo?.commenter_info?.email}</span>
          </div>
        </td>
        {/* Upvote */}
        <td className="size-px whitespace-nowrap">
          <div className="px-6 py-3">
            <div className="flex items-center gap-x-2">
              <div className="grow">
                <span className="text-sm text-gray-600">
                  {commentInfo?.comment?.length > 20 ? commentInfo?.comment?.slice(0, 20) : commentInfo?.comment}
                </span>
                <span className="text-sm text-gray-600">
                  {commentInfo?.comment?.length > 20 ? (
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
            <CommentModal commenter_info={commentInfo?.commenter_info} user_comment={commentInfo?.comment} isOpen={isOpen} close={close} />
          </div>
        </td>

        {/* Feedback */}
        <td className="size-px whitespace-nowrap">
          <div className="px-6 py-3">
            <div className="flex items-center gap-x-2">
              <span className="text-sm text-gray-600">{feedbackValue}</span>
            </div>
          </div>
        </td>

        {/* Reported By */}
        <td className="size-px whitespace-nowrap">
          <div className="px-6 py-3">
            <span className="text-sm text-gray-600">{commentInfo?.author_info?.email}</span>
          </div>
        </td>

        {/* Comments */}
        <td className="size-px whitespace-nowrap">
          <div className="px-6 py-3">
            <button
              //   onClick={handleReport}
              className="py-2 px-5 disabled:cursor-not-allowed inline-flex items-center gap-x-2 text-sm rounded-md border border-gray-200 bg-red-500 disabled:bg-gray-300 text-white shadow-sm hover:bg-red-600 transition-all"
            >
              Delete
            </button>
          </div>
        </td>
      </tr>
    </>
  );
};

export default ReportedCommentsRow;
