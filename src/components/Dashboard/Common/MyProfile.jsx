/* eslint-disable react/prop-types */

const MyProfile = () => {
  return (
    <div className="flex justify-center mt-10">
      <div className="relative flex flex-col justify-center w-[400px] p-6 shadow-lg shadow-gray-100 rounded-xl sm:px-12 bg-primary text-white">
        <img
          src="https://source.unsplash.com/150x150/?portrait?3"
          alt="profile image"
          className="w-32 h-32 mx-auto rounded-full aspect-square"
        />
        <div className="space-y-4 text-center divide-y">
          <div className="my-2 space-y-1">
            <h2 className="text-xl font-semibold sm:text-2xl">Username</h2>
            <p className="px-5 text-xs sm:text-base">email@email.com</p>
          </div>
          <p className="absolute top-3 left-[50%] translate-x-[50%] flex justify-center items-center max-w-20 bg-yellow-400 px-4 py-1 rounded-full mt-4 font-bold">
            Gold
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
