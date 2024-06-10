/* eslint-disable react/prop-types */
const Pagination = ({ postsCount, itemsPerPage, currentPage, handlePaginationButton }) => {
  const pages = [...Array(Math.ceil(postsCount / itemsPerPage)).keys()].map((element) => element + 1);

  return (
    <div>
      {/* Pagination  */}
      <nav className="flex justify-end items-center -space-x-px">
        <button
          type="button"
          className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm first:rounded-s-lg last:rounded-e-lg border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
        >
          <svg
            className="flex-shrink-0 size-3.5"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m15 18-6-6 6-6"></path>
          </svg>
          <span aria-hidden="true" className="sr-only">
            Previous
          </span>
        </button>
        {pages.map((btnNum, index) => (
          <button
            key={index}
            type="button"
            onClick={() => handlePaginationButton(btnNum)}
            className={`${
              btnNum === currentPage ? "bg-primary text-white hover:bg-primary" : "bg-white text-gray-800"
            } min-h-[38px] min-w-[38px] flex justify-center items-center  border border-gray-200 py-2 px-3 text-sm first:rounded-s-lg last:rounded-e-lg hover:bg-gray-100 transition-all`}
            aria-current="page"
          >
            {btnNum}
          </button>
        ))}

        <button
          type="button"
          className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm first:rounded-s-lg last:rounded-e-lg border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
        >
          <span aria-hidden="true" className="sr-only">
            Next
          </span>
          <svg
            className="flex-shrink-0 size-3.5"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </button>
      </nav>
      {/* End Pagination  */}
    </div>
  );
};

export default Pagination;
