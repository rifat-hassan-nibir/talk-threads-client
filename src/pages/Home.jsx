import AllPosts from "../components/Home/AllPosts";
import AllTags from "../components/Home/AllTags";
import Announcement from "../components/Home/Announcement";
import Hero from "../components/Home/Hero";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <div className=" bg-slate-50 rounded-2xl">
        <div className="grid lg:grid-cols-12 gap-4 container mx-auto py-8">
          <div className="col-span-3 bg-white p-5">
            <AllTags></AllTags>
          </div>
          <div className="col-span-6  bg-white p-5">
            <AllPosts></AllPosts>
          </div>
          <div className="col-span-3  bg-white p-5">
            <Announcement></Announcement>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
