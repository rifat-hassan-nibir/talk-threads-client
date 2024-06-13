import useUserInfo from "../../hooks/useUserInfo";
import ErrorMessage from "../Common/ErrorMessage";
import LoadingSpinner from "../Common/LoadingSpinner";

/* eslint-disable react/prop-types */
const UserInfo = ({ userName, email, photoURL }) => {
  const [userInfo, isPending, isError, error] = useUserInfo();

  if (isPending) return <LoadingSpinner />;
  if (isError && error) return <ErrorMessage error={error} />;

  return (
    <div>
      <div className="flex justify-center lg:mt-10 mt-6">
        <div className="relative flex flex-col justify-center w-[400px] p-6 shadow-lg rounded-xl sm:px-12 bg-primary text-white">
          <img src={photoURL} alt="profile image" className="w-32 h-32 mx-auto rounded-full aspect-square" />
          <div className="space-y-4 text-center divide-y">
            <div className="my-2 space-y-1">
              <h2 className="text-xl font-semibold sm:text-2xl">{userName}</h2>
              <p className="px-5 text-xs sm:text-base">{email}</p>
            </div>
            <p
              className={`absolute top-3 left-[50%] translate-x-[50%] flex justify-center items-center  ${
                userInfo?.premiumUser === true ? "bg-amber-400" : "bg-red-900"
              } px-4 py-1 rounded-full mt-4 font-bold`}
            >
              {userInfo?.premiumUser === true ? "Gold" : "Bronze"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
