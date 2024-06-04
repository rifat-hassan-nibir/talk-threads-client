import { FaRegCommentAlt } from "react-icons/fa";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { Link } from "react-router-dom";

const PostCard = () => {
  return (
    <Link to="/post/id">
      <div className="max-w-2xl px-8 py-4 border bg-gray-50 rounded-lg">
        <div className="flex items-center justify-between">
          <span className="text-sm font-light text-gray-600 ">Mar 10, 2019</span>
          <div className="flex gap-2">
            <p className="px-3 py-1 text-sm text-gray-100 transition-colors duration-300 transform bg-secondary rounded">Design</p>
            <p className="px-3 py-1 text-sm text-gray-100 transition-colors duration-300 transform bg-secondary rounded">Design</p>
          </div>
        </div>

        <div className="mt-2">
          <h3 className="text-xl font-bold text-gray-700">Accessibility tools for designers and developers</h3>
          <p className="mt-2 text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste
            iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!
          </p>
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center">
            <img
              className="hidden object-cover w-10 h-10 mr-4 rounded-full sm:block"
              src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=40&q=80"
              alt="avatar"
            />
            <a className="font-bold text-gray-700 cursor-pointer" tabIndex="0" role="link">
              Khatab wedaa
            </a>
          </div>

          {/* Comments */}
          <div className="flex items-center gap-2">
            <FaRegCommentAlt className="size-4" />
            <p>5</p>
          </div>

          {/* Votes */}
          <div className="flex gap-4 items-center">
            <div className="flex gap-2">
              <AiOutlineLike className="size-5" />
              <p>5</p>
            </div>
            <div className="flex gap-2">
              <AiOutlineDislike className="size-5" />
              <p>5</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
