import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/Common/SectionTitle";
import ButtonSpinner from "../../../components/Common/ButtonSpinner";
import { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const MakeAnnouncement = () => {
  const { user } = useContext(AuthContext);
  const [disabled, setDisabled] = useState(false);
  const navigate = useNavigate();

  // Get the data from form using React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const announcement = {
      ...data,
      date: new Date(),
      adminInfo: { image: user?.photoURL, email: user?.email, username: user?.displayName },
    };

    // show button spinner
    setDisabled(true);
    try {
      const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/announcements`, announcement);
      if (data.insertedId) {
        navigate("/");
        toast.success("Announcement added successfully");
      }
    } catch (error) {
      toast.error(error.message);
      // hide button spinner
      setDisabled(false);
    }
  };
  return (
    <div>
      <div className="flex justify-center items-center max-w-[85rem] py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="w-full mx-auto border bg-white lg:p-10 p-5 rounded-lg shadow-lg shadow-gray-100">
          <div className="text-center">
            <SectionTitle title={"Announcement"}></SectionTitle>
          </div>

          <div className="mt-8">
            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="space-y-4 lg:space-y-6">
                <div>
                  <label htmlFor="title" className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">
                    Announcement Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    {...register("title", { required: true })}
                  />
                  {errors.title && <span className="text-red-500">This field is required</span>}
                </div>

                <div>
                  <label htmlFor="description" className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">
                    Announcement Description
                  </label>
                  <textarea
                    id="description"
                    rows="4"
                    className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm  focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    {...register("description", { required: true })}
                  ></textarea>
                  {errors.description && <span className="text-red-500">This field is required</span>}
                </div>

                {/* Author's Information */}
                <div>
                  <label htmlFor="admin-information" className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">
                    Admin&apos;s Information:
                  </label>
                  <div className="grid grid-cols-5 gap-4 lg:gap-6 items-center">
                    <div className="col-span-1">
                      <img className="inline-block size-[62px] rounded-full" src={user.photoURL} alt="Donator Image" />
                    </div>
                    <div className="col-span-5 lg:col-span-2">
                      <input
                        type="text"
                        name="authorName"
                        id="author-name"
                        defaultValue={user.displayName}
                        disabled
                        className=" py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      />
                    </div>
                    <div className="col-span-5 lg:col-span-2">
                      <input
                        type="email"
                        name="authorEmail"
                        id="author-email"
                        defaultValue={user.email}
                        disabled
                        className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* End Grid */}

              {/* Submit Button */}
              <div className="mt-6 grid">
                <button
                  type="submit"
                  disabled={disabled}
                  className="disabled:cursor-not-allowed w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-primary text-white hover:bg-secondary hover:text-white hover:transition-all disabled:opacity-50 disabled:pointer-events-none"
                >
                  {disabled ? <ButtonSpinner /> : "Add Announcement"}
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

export default MakeAnnouncement;
