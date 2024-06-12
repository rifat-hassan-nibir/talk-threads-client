const CommentCard = ({ commentInfo }) => {
  return (
    <div>
      <div className="lg:px-8 px-6 lg:py-4 py-3 border bg-gray-50 rounded-lg shadow-md shadow-gray-100">
        <div className="flex items-center mb-4">
          <img className="w-12 h-12 rounded-full mr-4" src="https://i.ibb.co/jzj3VLN/entrepreneur-593358-640.jpg" />
          <div>
            <p className="font-bold">Username</p>
            <p className="text-gray-600 text-sm">03/04/24</p>
          </div>
        </div>
        <p className="text-gray-800">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis saepe nesciunt eos sunt quaerat veritatis laboriosam rerum!
          Dolor sequi blanditiis a illo modi, aut saepe voluptate! Sequi praesentium optio voluptas?
        </p>
      </div>
    </div>
  );
};

export default CommentCard;
