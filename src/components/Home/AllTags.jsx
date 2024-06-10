/* eslint-disable react/prop-types */
import useTags from "../../hooks/useTags";
import ErrorMessage from "../Common/ErrorMessage";
import Gap from "../Common/Gap";
import LoadingSpinner from "../Common/LoadingSpinner";
import Tag from "../Common/Tag";

const AllTags = ({ setSearch }) => {
  const [tags, isPending, isError, error] = useTags();

  if (isPending) return <LoadingSpinner />;
  if (isError && error) return <ErrorMessage error={error} />;
  return (
    <div>
      <div className="max-h-[70vh] overflow-auto">
        <Gap></Gap>

        <div className="flex flex-wrap gap-3">
          {/* All tags */}
          <button onClick={() => setSearch("")}>
            <p className="px-3 py-1 text-sm text-gray-100 transition-colors duration-300 transform bg-secondary rounded">All</p>
          </button>

          {/* Tags added by admin */}
          {tags.map((tag) => (
            <Tag setSearch={setSearch} tagName={tag.tag} key={tag._id}></Tag>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllTags;
