/* eslint-disable react/prop-types */
const ErrorMessage = ({ error }) => {
  console.log(error.message);
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-red-100">
        <div className="bg-red-500 text-white text-2xl font-semibold rounded-lg border shadow-lg p-10">
          <p>Something went wrong, please reload the page</p>
        </div>
      </div>
    </div>
  );
};

export default ErrorMessage;