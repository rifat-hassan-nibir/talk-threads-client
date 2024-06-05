import AllPosts from "../components/Home/AllPosts/AllPosts";
import AllTags from "../components/Home/AllTags";
import Announcements from "../components/Home/Announcements/Announcements";
import Hero from "../components/Home/Hero";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <div className="bg-slate-50">
        <div className="container mx-auto grid lg:grid-cols-12 gap-6 lg:py-24 py-16 lg:px-0 px-4">
          <div className="lg:col-span-3 bg-white lg:p-6 p-4 rounded-lg shadow-lg shadow-gray-100">
            <Announcements></Announcements>
          </div>
          <div className="lg:col-span-6 bg-white lg:p-6 p-4 rounded-lg shadow-lg shadow-gray-100">
            <AllPosts></AllPosts>
          </div>
          <div className="lg:col-span-3 bg-white lg:p-6 p-4 rounded-lg shadow-lg shadow-gray-100">
            <AllTags></AllTags>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
