/* eslint-disable react/prop-types */
const CommentCard = ({ comment: commentData }) => {
  const { comment, time, commenter_info } = commentData;
  return (
    <div>
      <div className="lg:px-8 px-6 lg:py-4 py-3 border bg-gray-50 rounded-lg shadow-md shadow-gray-100">
        <div className="flex items-center mb-4">
          <img className="w-12 h-12 rounded-full mr-4" src={commenter_info?.photo} />
          <div>
            <p className="font-bold">{commenter_info?.name}</p>
            <p className="text-gray-600 text-sm">{new Date(time).toLocaleDateString()}</p>
          </div>
        </div>
        <p className="text-gray-800">{comment}</p>
      </div>
    </div>
  );
};

export default CommentCard;
