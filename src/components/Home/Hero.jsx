/* eslint-disable react/prop-types */
const Hero = ({ handleSearch, setSearch }) => {
  return (
    <div>
      <section className="bg-white lg:my-24 my-16">
        <div className="container px-4 mx-auto text-center">
          <div className="max-w-lg mx-auto">
            <h1 className="text-3xl font-bold text-gray-800 lg:text-4xl">
              Welcome to <span className="text-primary">Talk Threads</span>
            </h1>

            <p className="mt-6 text-gray-500">Ask questions, share answers, build community</p>

            <div className="w-full max-w-sm mx-auto shadow-lg shadow-gray-50 mt-6 bg-transparent border rounded-md  focus-within:border-blue-400 focus-within:ring focus-within:ring-primary focus-within:ring-opacity-40">
              <form onSubmit={handleSearch} className="flex flex-col md:flex-row">
                <input
                  type="text"
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                  name="searchField"
                  placeholder="Search for posts using tags"
                  className="flex-1 h-10 px-4 py-2 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none :text-gray-200 focus:outline-none focus:placeholder-transparent"
                />

                <button className="h-10 px-4 py-2 m-1 text-white transition-colors duration-300 transform bg-primary rounded-md hover:bg-secondary">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
