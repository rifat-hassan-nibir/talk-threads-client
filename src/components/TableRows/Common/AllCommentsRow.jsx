import CommentModal from "../../Common/CommentModal";
import { Button } from "@headlessui/react";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

/* eslint-disable react/prop-types */
const AllCommentsRow = ({ comment }) => {
  const { comment: user_comment, commenter_info } = comment;
  const [isOpen, setIsOpen] = useState(false);
  const [feedbackValue, setFeedbackValue] = useState("");
  const [disabled, setDisabled] = useState(true);

  const handleFeedbackValue = (e) => {
    setFeedbackValue(e.target.value);
  };

  const handleReport = async () => {
    // disable report button
    setDisabled(true);

    const reportData = {
      commentInfo: comment,
      feedbackValue: feedbackValue,
    };
    // post report data to db
    try {
      const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/post-comment-reports`, reportData);
      if (data.insertedId) {
        toast.success("Report submitted successfully");
        setDisabled(true);
        setFeedbackValue("");
      }
    } catch (error) {
      toast.error(error.message);
      setDisabled(false);
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

        {/* Feedback */}
        <td className="size-px whitespace-nowrap">
          <div className="px-6 py-3">
            <div className="flex items-center gap-x-2">
              <div className="grow">
                <select defaultValue={feedbackValue} onChange={handleFeedbackValue} className="select select-bordered w-full max-w-xs">
                  <option value="">Feedback</option>
                  <option value="Spamming">Spamming</option>
                  <option value="Hate Speech">Hate Speech</option>
                  <option value="False Information">False Information</option>
                </select>
              </div>
            </div>
          </div>
        </td>
        {/* Comments */}
        <td className="size-px whitespace-nowrap">
          <div className="px-6 py-3">
            <button
              disabled={feedbackValue.length < 1 && disabled}
              onClick={handleReport}
              className="py-2 px-5 disabled:cursor-not-allowed inline-flex items-center gap-x-2 text-sm rounded-md border border-gray-200 bg-red-500 disabled:bg-gray-300 text-white shadow-sm hover:bg-red-600 transition-all"
            >
              Report
            </button>
          </div>
        </td>
      </tr>
    </>
  );
};

export default AllCommentsRow;
