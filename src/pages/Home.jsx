import AllPosts from "../components/Home/AllPosts/AllPosts";
import AllTags from "../components/Home/AllTags";
import Announcements from "../components/Home/Announcements/Announcements";
import Hero from "../components/Home/Hero";
import SectionTitle from "../components/SectionTitle";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <div className="bg-slate-50">
        <div className="container mx-auto grid lg:grid-cols-12 lg:gap-8 gap-6 lg:py-24 py-16 lg:px-0 px-4">
          {/* Annoucements */}
          <div className="lg:col-span-3 bg-white lg:px-6 px-4 lg:py-10 py-8 rounded-lg shadow-lg shadow-gray-100">
            <SectionTitle title={"Announcements"}></SectionTitle>
            <Announcements></Announcements>
          </div>
          {/* All Posts */}
          <div className="lg:col-span-6 bg-white lg:px-6 px-4 lg:py-10 py-8 rounded-lg shadow-lg shadow-gray-100">
            <div className="flex justify-between items-start">
              <SectionTitle title={"All Posts"}></SectionTitle>

              {/* Filter by popularity */}
              <button className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-primary rounded-md hover:bg-secondary transition-all">
                Sort By Popularity
              </button>
            </div>

            <AllPosts></AllPosts>
          </div>
          {/* All Tags */}
          <div className="lg:col-span-3 bg-white lg:px-6 px-4 lg:py-10 py-8 rounded-lg shadow-lg shadow-gray-100">
            <SectionTitle title={"All Tags"}></SectionTitle>
            <AllTags></AllTags>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
