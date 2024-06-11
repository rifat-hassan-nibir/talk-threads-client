const CommentSection = () => {
  return (
    <div>
      <form className="flex items-start gap-4">
        <textarea
          placeholder="Write your comment here"
          rows="4"
          className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm  focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
        ></textarea>
        <div>
          <button
            type="button"
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
