import AllPosts from "../components/Home/AllPosts/AllPosts";
import AllTags from "../components/Home/AllTags";
import Announcement from "../components/Home/Announcement";
import Hero from "../components/Home/Hero";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <div className=" bg-slate-50">
        <div className="grid lg:grid-cols-12 gap-4 container mx-auto py-8">
          <div className="lg:col-span-3 bg-white p-6 rounded-lg shadow-lg shadow-gray-100">
            <Announcement></Announcement>
          </div>
          <div className="lg:col-span-6  bg-white p-6 rounded-lg shadow-lg shadow-gray-100">
            <AllPosts></AllPosts>
          </div>
          <div className="lg:col-span-3 bg-white p-6 rounded-lg shadow-lg shadow-gray-100">
            <AllTags></AllTags>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
