import Gap from "../Gap";
import Tag from "../Tag";

const tags = [
  "General",
  "Art & Design",
  "Sports",
  "Travel",
  "Books & Literature",
  "Technology",
  "Gadgets",
  "Programming",
  "Software",
  "AI & Machine Learning",
];

const AllTags = () => {
  return (
    <div>
      <div className="max-h-[80vh] overflow-auto">
        <Gap></Gap>

        <div className="flex flex-wrap gap-3">
          {tags.map((tag) => (
            <Tag tagName={tag} key={tag._id}></Tag>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllTags;
