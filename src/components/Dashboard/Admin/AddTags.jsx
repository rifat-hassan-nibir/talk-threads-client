import ButtonSpinner from "../../Common/ButtonSpinner";
import Gap from "../../Common/Gap";
import SectionTitle from "../../Common/SectionTitle";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { useState } from "react";

const AddTags = () => {
  const [disabled, setDisabled] = useState(false);
  const navigate = useNavigate();

  // Get the data from form using React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const tag = { ...data };

    // show button spinner
    setDisabled(true);
    try {
      const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/tags`, tag);
      if (data.insertedId) {
        navigate("/");
        toast.success("Tag added successfully");
      }
    } catch (error) {
      toast.error(error.message);
      // hide button spinner
      setDisabled(false);
    }
  };
  return (
    <div>
      <Gap />
      <div>
        <div className="flex justify-center items-center max-w-[85rem] py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="w-full mx-auto border bg-white lg:p-10 p-5 rounded-lg shadow-lg shadow-gray-100">
            <div className="text-center">
              <SectionTitle title={"Add a new Tag"}></SectionTitle>
            </div>

            <div className="mt-8">
              {/* Form */}
              <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-12 gap-4">
                <div className="space-y-4 lg:space-y-6 lg:col-span-9 col-span-full">
                  <div>
                    <input
                      type="text"
                      id="title"
                      className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      {...register("tag", { required: true })}
                    />
                    {errors.tag && <span className="text-red-500">This field is required</span>}
                  </div>
                </div>
                {/* End Grid */}

                {/* Submit Button */}
                <div className="lg:col-span-3 col-span-full grid">
                  <button
                    type="submit"
                    disabled={disabled}
                    className=" disabled:cursor-not-allowed w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-primary text-white hover:bg-secondary hover:text-white hover:transition-all disabled:opacity-50 disabled:pointer-events-none"
                  >
                    {disabled ? <ButtonSpinner /> : "Add Tag"}
                  </button>
                </div>
              </form>
              {/* End Form  */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTags;
