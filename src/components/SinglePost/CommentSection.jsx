/* eslint-disable react/prop-types */
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../providers/AuthProvider";

const CommentSection = ({ post_id, post_title, author_info, refetch }) => {
  const { user } = useContext(AuthContext);

  const { mutateAsync } = useMutation({
    mutationFn: async (comment) => {
      const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/post-comment`, comment);
      return data;
    },
    onSuccess: (data) => {
      if (data.insertedId) {
        toast.success("Your comment added successfully");
        refetch();
      }
    },
  });

  const handleComment = (e) => {
    try {
      e.preventDefault();
      const commentText = e.target.comment.value;
      const commentInfo = {
        post_id: post_id,
        post_title: post_title,
        comment: commentText,
        time: new Date(),
        commenter_info: {
          name: user.displayName,
          photo: user.photoURL,
        },
        author_info,
      };
      console.log(commentInfo);

      mutateAsync(commentInfo);
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div>
      <form onSubmit={handleComment} className="flex lg:flex-row flex-col items-start gap-4">
        <textarea
          placeholder="Write your comment here"
          name="comment"
          rows="4"
          className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm  focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
        ></textarea>
        <div>
          <button
            type="submit"
            className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent transition-all bg-primary text-white hover:bg-secondary hover:text-white disabled:opacity-50 disabled:pointer-events-none"
          >
            Comment
          </button>
        </div>
      </form>
    </div>
  );
};

export default CommentSection;
