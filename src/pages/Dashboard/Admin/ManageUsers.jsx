import ErrorMessage from "../../../components/Common/ErrorMessage";
import LoadingSpinner from "../../../components/Common/LoadingSpinner";
import UsersRow from "../../../components/TableRows/Admin/UsersRow";
import useAllUsers from "../../../hooks/useAllUsers";

const ManageUsers = () => {
  const [users, isPending, isError, error] = useAllUsers();

  if (isPending) return <LoadingSpinner />;
  if (isError && error) return <ErrorMessage error={error} />;

  return (
    <div>
      {/* Table Section  */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Card  */}
        <div className="flex flex-col shadow-lg shadow-gray-100">
          <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
              <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-neutral-900 dark:border-neutral-700">
                {/* Header  */}
                <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-neutral-700">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-neutral-200">All Users</h2>
                  </div>
                </div>
                {/* End Header  */}

                {/* Table  */}
                <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                  <thead className="bg-gray-50 dark:bg-neutral-900">
                    <tr>
                      {/* username */}
                      <th scope="col" className="px-6 py-3 text-center">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                            Username
                          </span>
                        </div>
                      </th>

                      {/* user email */}
                      <th scope="col" className="px-6 py-3 text-center">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">Email</span>
                        </div>
                      </th>

                      {/* Subscription status */}
                      <th scope="col" className="px-6 py-3 text-center">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                            Subscription Status
                          </span>
                        </div>
                      </th>

                      {/* User Role */}
                      <th scope="col" className="px-6 py-3 text-center">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">Role</span>
                        </div>
                      </th>

                      {/* Action */}
                      <th scope="col" className="px-6 py-3 text-center">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">Action</span>
                        </div>
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                    {users.map((user) => (
                      <UsersRow user={user} key={user._id} />
                    ))}
                  </tbody>
                </table>
                {/* End Table  */}
              </div>
            </div>
          </div>
        </div>
        {/* End Card  */}
      </div>
      {/* End Table Section  */}
    </div>
  );
};

export default ManageUsers;
