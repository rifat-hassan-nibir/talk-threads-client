import useTags from "../../hooks/useTags";
import ErrorMessage from "../Common/ErrorMessage";
import Gap from "../Common/Gap";
import LoadingSpinner from "../Common/LoadingSpinner";
import Tag from "../Common/Tag";

const AllTags = () => {
  const [tags, isPending, isError, error] = useTags();

  if (isPending) return <LoadingSpinner />;
  if (isError && error) return <ErrorMessage error={error} />;
  return (
    <div>
      <div className="max-h-[75vh] overflow-auto">
        <Gap></Gap>

        <div className="flex flex-wrap gap-3">
          {tags.map((tag) => (
            <Tag tagName={tag.tag} key={tag._id}></Tag>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllTags;
