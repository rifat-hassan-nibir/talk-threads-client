import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

/* eslint-disable react/prop-types */
const UsersRow = ({ user, refetch }) => {
  const { userName, email, premiumUser, role } = user;

  // update user role
  const { mutateAsync } = useMutation({
    mutationFn: async (role) => {
      const { data } = await axios.patch(`${import.meta.env.VITE_API_URL}/update-role/${email}`, role);
      return data;
    },
    onSuccess: (data) => {
      console.log(data);
      refetch();
      toast.success("Role Updated");
    },
  });

  // make admin function
  const handleMakeAdmin = async () => {
    // user role object
    const role = {
      role: "admin",
    };

    try {
      Swal.fire({
        title: "Are you sure you?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#2c4263",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Success!",
            text: "This user is now an admin",
            icon: "success",
          });
          await mutateAsync(role);
        }
      });
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <tr>
        {/* User Name */}
        <td className="size-px whitespace-nowrap">
          <div className="px-6 py-3">
            <span className="text-sm text-gray-600">{userName}</span>
          </div>
        </td>
        {/* Email */}
        <td className="size-px whitespace-nowrap">
          <div className="px-6 py-3">
            <div className="flex items-center gap-x-2">
              <div className="grow">
                <span className="text-sm text-gray-600">{email}</span>
              </div>
            </div>
          </div>
        </td>
        {/* Subscription Status */}
        <td className="size-px whitespace-nowrap">
          <div className="px-6 py-3">
            <div className="flex items-center gap-x-2">
              <div className="grow">
                <span className={`text-sm text-white px-4 rounded-full py-1 ${premiumUser ? "bg-yellow-400" : "bg-amber-900"}`}>
                  {premiumUser ? "Gold" : "Bronze"}
                </span>
              </div>
            </div>
          </div>
        </td>
        {/* Role */}
        <td className="size-px whitespace-nowrap">
          <div className="px-6 py-3">
            <div className="flex items-center gap-x-2">
              <div className="grow">
                <span className="text-sm text-gray-600">{role}</span>
              </div>
            </div>
          </div>
        </td>
        {/* Make admin */}
        <td className="size-px whitespace-nowrap">
          <div className="px-6 py-3">
            <button
              type="button"
              disabled={user.role === "admin"}
              onClick={handleMakeAdmin}
              className="py-2 px-5 disabled:bg-gray-200 disabled:text-gray-400 inline-flex items-center gap-x-2 text-sm rounded-md border border-gray-200 bg-primary text-white shadow-sm hover:bg-secondary transition-all"
            >
              Make Admin
            </button>
          </div>
        </td>
        {/* Action */}
      </tr>
    </>
  );
};

export default UsersRow;
