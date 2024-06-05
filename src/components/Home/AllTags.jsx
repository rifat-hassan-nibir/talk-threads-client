import Gap from "../Gap";
import SectionTitle from "../SectionTitle";
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
    <div className="py-4">
      <SectionTitle title={"All Tags"}></SectionTitle>
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
