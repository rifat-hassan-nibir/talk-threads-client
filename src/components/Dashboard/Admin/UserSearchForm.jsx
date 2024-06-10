/* eslint-disable react/prop-types */
const UserSearchForm = ({ setSearch }) => {
  // Search for users
  const handleSearch = (e) => {
    e.preventDefault();
    const searchText = e.target.searchField.value;
    setSearch(searchText);
  };

  return (
    <div className="w-full max-w-md mx-auto shadow-lg shadow-gray-50 mt-6 bg-transparent border rounded-md  focus-within:border-blue-400 focus-within:ring focus-within:ring-primary focus-within:ring-opacity-40">
      <form onSubmit={(e) => handleSearch(e)} className="flex flex-col md:flex-row">
        <input
          type="text"
          name="searchField"
          placeholder="Search for users using username"
          className="flex-1 h-10 px-4 py-2 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none :text-gray-200 focus:outline-none focus:placeholder-transparent"
        />

        <button className="h-10 px-4 py-2 m-1 text-white transition-colors duration-300 transform bg-primary rounded-md hover:bg-secondary">
          Search
        </button>
      </form>
    </div>
  );
};

export default UserSearchForm;
