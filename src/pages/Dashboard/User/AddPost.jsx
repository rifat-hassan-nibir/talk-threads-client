/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import toast from "react-hot-toast";
import axios from "axios";
import ButtonSpinner from "../../../components/Common/ButtonSpinner";
import useTags from "../../../hooks/useTags";
import SectionTitle from "../../../components/Common/SectionTitle";

const AddPost = () => {
  const { user } = useContext(AuthContext);
  const [tags] = useTags();
  const navigate = useNavigate();
  const currentDate = new Date();
  const [disabled, setDisabled] = useState(false);

  // Get the data from form using React Hook Form
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    // set default value for upvote and downvote
    setValue("upvote", 0);
    setValue("downvote", 0);
    setValue("date", currentDate);
  }, []);

  const onSubmit = async (data) => {
    const authorInfo = { email: user.email, name: user.displayName, photo: user.photoURL };
    const addedPost = { ...data, authorInfo };

    // show button spinner
    setDisabled(true);
    try {
      const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/add-post`, addedPost);
      if (data.insertedId) {
        navigate("/dashboard/my-posts");
        toast.success("Post added successfully");
      }
    } catch (error) {
      toast.error(error.message);
      // Hide button spinner
      setDisabled(false);
    }
  };

  return (
    <div>
      <div className="flex justify-center items-center max-w-[85rem] py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="w-full mx-auto border bg-white lg:p-10 p-5 rounded-lg shadow-lg shadow-gray-100">
          <div className="text-center">
            <SectionTitle title={"Add Post"}></SectionTitle>
          </div>

          <div className="mt-8">
            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="space-y-4 lg:space-y-6">
                <div>
                  <label htmlFor="post-title" className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">
                    Post Title
                  </label>
                  <input
                    type="text"
                    id="post-title"
                    className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    {...register("post_title", { required: true })}
                  />
                  {errors.post_title && <span className="text-red-500">This field is required</span>}
                </div>

                <div>
                  <label htmlFor="post-description" className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">
                    Post Description
                  </label>
                  <textarea
                    id="post-description"
                    rows="4"
                    className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm  focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    {...register("post_description", { required: true })}
                  ></textarea>
                  {errors.post_description && <span className="text-red-500">This field is required</span>}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                  {/* Tags */}
                  <div>
                    <label htmlFor="tag" className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">
                      Tag
                    </label>
                    <select
                      id="tag"
                      className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm  focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      {...register("tag", { required: true })}
                    >
                      {tags?.map((tag) => (
                        <option value={tag.tag} key={tag._id}>
                          {tag.tag}
                        </option>
                      ))}
                    </select>
                    {errors.tag && <span className="text-red-500">This field is required</span>}
                  </div>

                  {/* Post Date */}
                  <div>
                    <label htmlFor="post-date" className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">
                      Post Date
                    </label>
                    <input
                      type="text"
                      id="post-date"
                      defaultValue={currentDate.toLocaleDateString()}
                      disabled
                      className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm  focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    />
                  </div>

                  {/* Upvote */}
                  <div>
                    <label htmlFor="upvote" className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">
                      Upvote
                    </label>
                    <input
                      type="text"
                      id="upvote"
                      defaultValue={0}
                      disabled
                      className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm  focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      {...register("upvote")}
                    />
                  </div>

                  {/* Downvote */}
                  <div>
                    <label htmlFor="downvote" className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">
                      Down Vote
                    </label>
                    <input
                      type="text"
                      id="downvote"
                      defaultValue={0}
                      disabled
                      className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm  focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      {...register("downvote")}
                    />
                  </div>
                </div>
                {/* End Grid  */}

                {/* Author's Information */}
                <div>
                  <label htmlFor="author-information" className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">
                    Author&apos;s Information:
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
                  {disabled ? <ButtonSpinner /> : "Add Post"}
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

export default AddPost;
