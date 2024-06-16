import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { AuthContext } from "../../providers/AuthProvider";
import ButtonSpinner from "../../components/Common/ButtonSpinner";

const JoinUs = () => {
  const { signIn, signInWithGoogle, saveUserInfo } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // show button spinner
    setDisabled(true);
    const { email, password } = data;

    // Login User
    await signIn(email, password)
      .then(() => {
        toast.success("Logged in successfuly");
        navigate("/");
      })
      .catch(() => {
        toast.error("Email or Password did not match");
        // hide the button spinner
        setDisabled(false);
      });
  };

  // Google Sign In
  const handleGoogleLogin = async () => {
    // show button spinner
    setDisabled(true);
    await signInWithGoogle()
      .then((result) => {
        const userInfo = {
          userName: result.user.displayName,
          email: result.user.email,
          role: "user",
          premiumUser: false,
        };
        saveUserInfo(userInfo);
        toast.success("Google Login Successful");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
        // hide button spinner
        setDisabled(false);
      });
  };

  return (
    <div className="max-w-md mx-auto lg:px-0 px-4 lg:my-[80px] my-[50px]">
      <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-neutral-900 dark:border-neutral-700">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Join Us</h1>
            <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
              Don&apos;t have an account yet?
              <Link to="/register" className="text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500">
                Register here
              </Link>
            </p>
          </div>

          <div className="mt-5">
            <button
              onClick={handleGoogleLogin}
              type="button"
              className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
            >
              <svg className="w-4 h-auto" width="46" height="47" viewBox="0 0 46 47" fill="none">
                <path
                  d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z"
                  fill="#4285F4"
                />
                <path
                  d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z"
                  fill="#34A853"
                />
                <path
                  d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z"
                  fill="#FBBC05"
                />
                <path
                  d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z"
                  fill="#EB4335"
                />
              </svg>
              Sign in with Google
            </button>

            <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-neutral-500 dark:before:border-neutral-600 dark:after:border-neutral-600">
              Or
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid gap-y-4">
                {/* Form Group */}
                <div>
                  <label htmlFor="email" className="block text-sm mb-2 dark:text-white">
                    Email address
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      {...register("email", { required: true })}
                    />
                    {errors.name && <span className="text-red-600">This field is required</span>}
                  </div>
                </div>
                {/* End Form Group */}

                {/* Form Group */}
                <div>
                  <div className="flex justify-between items-center">
                    <label htmlFor="password" className="block text-sm mb-2 dark:text-white">
                      Password
                    </label>
                    <a className="text-sm text-blue-600 decoration-2 hover:underline font-medium" href="#">
                      Forgot password?
                    </a>
                  </div>
                  <div className="relative flex items-center">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      {...register("password", { required: true })}
                    />
                    <span className="absolute right-4 hover:cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? <IoIosEyeOff /> : <IoIosEye />}
                    </span>
                    {errors.name && <span className="text-red-600">This field is required</span>}
                  </div>
                </div>
                {/* End Form Group  */}

                <button
                  type="submit"
                  disabled={disabled}
                  className="w-full mt-2 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent transition-all bg-primary text-white hover:bg-secondary hover:text-white disabled:opacity-50 disabled:pointer-events-none"
                >
                  {disabled ? <ButtonSpinner /> : "Sign In"}
                </button>
              </div>
            </form>
            {/* End Form  */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
