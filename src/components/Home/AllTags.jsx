import useTags from "../../hooks/useTags";
import Gap from "../Common/Gap";
import Tag from "../Common/Tag";

const AllTags = () => {
  const [tags] = useTags();
  console.log(tags);
  return (
    <div>
      <div className="max-h-[80vh] overflow-auto">
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
