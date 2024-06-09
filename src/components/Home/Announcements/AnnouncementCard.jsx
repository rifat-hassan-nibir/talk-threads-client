/* eslint-disable react/prop-types */
const AnnouncementCard = ({ announcement }) => {
  const { title, description, adminInfo } = announcement;
  const { image, email } = adminInfo;
  return (
    <div className="shadow-lg shadow-gray-100">
      <div className="lg:px-8 px-6 lg:py-4 py-3 border bg-gray-50 rounded-lg ">
        <div className="mt-2">
          <h3 className="lg:text-xl text-lg font-bold text-gray-700">{title}</h3>
          <p className="mt-2 text-gray-600">{description}</p>
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center">
            <img className="object-cover w-10 h-10 mr-4 rounded-full" src={image} alt="avatar" />
            <p className="font-bold text-gray-700">{email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementCard;
