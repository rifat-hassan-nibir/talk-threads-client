import { ImSpinner2 } from "react-icons/im";

const ButtonSpinner = () => {
  return (
    <div className="flex justify-center items-center m-auto animate-spin">
      <ImSpinner2 className="text-xl" />
    </div>
  );
};

export default ButtonSpinner;
