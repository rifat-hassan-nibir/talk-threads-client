import { Link } from "react-router-dom";
import SectionTitle from "../Common/SectionTitle";

const BecomeMember = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-[200px] space-y-5">
      <SectionTitle title={"You already added 5 posts, Become a member to add more posts."}></SectionTitle>
      <div className="flex justify-center">
        <Link
          to="/membership"
          type="button"
          className="mt-2 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent transition-all bg-primary text-white hover:bg-secondary hover:text-white disabled:opacity-50 disabled:pointer-events-none"
        >
          Become a member
        </Link>
      </div>
    </div>
  );
};

export default BecomeMember;
