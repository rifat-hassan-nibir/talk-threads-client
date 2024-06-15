import { Button } from "@headlessui/react";
import CommentModal from "../../Common/CommentModal";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

/* eslint-disable react/prop-types */
const ReportedCommentsRow = ({ reportedComment, refetch }) => {
  const { commentInfo, feedbackValue } = reportedComment;
  console.log(commentInfo);
  const [isOpen, setIsOpen] = useState(false);

  // remove report
  const { mutateAsync: removeReport } = useMutation({
    mutationFn: async (reportedCommentId) => {
      const { data } = await axios.delete(`${import.meta.env.VITE_API_URL}/remove-reported-comment/${reportedCommentId}`);
      return data;
    },
    onSuccess: (data) => {
      if (data.deletedCount > 0) {
        refetch();
      }
    },
  });

  // remove reported comment function
  const handleRemoveReport = (reportId) => {
    try {
      Swal.fire({
        title: "Do you want to remove this report?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#2c4263",
        confirmButtonText: "Yes, remove it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Removed!",
            text: "Report was removed.",
            icon: "success",
          });
          await removeReport(reportId);
        }
      });
    } catch (error) {
      toast.error(error.message);
    }
  };

  // delete reported comment from the post
  const { mutateAsync: deleteComment } = useMutation({
    mutationFn: async (commentId) => {
      const { data } = await axios.delete(`${import.meta.env.VITE_API_URL}/delete-reported-comment/${commentId}`);
      return data;
    },
    onSuccess: (data) => {
      if (data.deletedCount > 0) {
        refetch();
      }
    },
  });

  const handleDeleteComment = (commentId) => {
    try {
      Swal.fire({
        title: "Do you want to delete this comment?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#2c4263",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Removed!",
            text: "Comment was deleted.",
            icon: "success",
          });
          await deleteComment(commentId);
        }
      });
    } catch (error) {
      toast.error(error.message);
    }
  };

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
          <div className="px-6 py-3 flex justify-center gap-3">
            <button
              onClick={() => handleRemoveReport(reportedComment._id)}
              className="py-2 px-5 disabled:cursor-not-allowed inline-flex items-center gap-x-2 text-sm rounded-md border border-gray-200 bg-primary disabled:bg-gray-300 text-white shadow-sm hover:bg-secondary transition-all"
            >
              Remove Report
            </button>
            <button
              onClick={() => handleDeleteComment(commentInfo._id)}
              className="py-2 px-5 disabled:cursor-not-allowed inline-flex items-center gap-x-2 text-sm rounded-md border border-gray-200 bg-red-500 disabled:bg-gray-300 text-white shadow-sm hover:bg-red-600 transition-all"
            >
              Delete Comment
            </button>
          </div>
        </td>
      </tr>
    </>
  );
};

export default ReportedCommentsRow;
