import { useState } from "react";
import SectionTitle from "../components/Common/SectionTitle";
import AllPosts from "../components/Home/AllPosts/AllPosts";
import AllTags from "../components/Home/AllTags";
import Announcements from "../components/Home/Announcements/Announcements";
import Hero from "../components/Home/Hero";
import { GrAnnounce } from "react-icons/gr";
import { IoDocumentTextOutline } from "react-icons/io5";
import { TiTags } from "react-icons/ti";

const Home = () => {
  const [search, setSearch] = useState("");
  const [popularPosts, setPopularPosts] = useState(false);

  return (
    <div>
      <Hero setSearch={setSearch}></Hero>
      <div className="bg-slate-200">
        <div className="container mx-auto grid lg:grid-cols-12 lg:gap-6 gap-6 lg:py-24 py-16 lg:px-0 px-4">
          {/* Annoucements */}
          <div className="lg:col-span-3 bg-white lg:px-6 px-4 lg:py-10 py-8 border rounded-lg">
            <div className="flex items-center gap-4">
              <GrAnnounce className="text-[28px]" />
              <SectionTitle title={"Announcements"}></SectionTitle>
            </div>
            <Announcements></Announcements>
          </div>
          {/* All Posts */}
          <div className="lg:col-span-6 bg-white lg:px-6 px-4 lg:py-10 py-8 rounded-lg border ">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-4">
                <IoDocumentTextOutline className="text-[28px]" />
                <SectionTitle title={"Posts"}></SectionTitle>
              </div>

              {/* Filter by popularity */}
              <button
                onClick={() => setPopularPosts(!popularPosts)}
                className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-primary rounded-md hover:bg-secondary transition-all"
              >
                {popularPosts === false ? "Sort by Popularity" : "Reset"}
              </button>
            </div>

            <AllPosts search={search} popularPosts={popularPosts}></AllPosts>
          </div>
          {/* All Tags */}
          <div className="lg:col-span-3 bg-white lg:px-6 px-4 lg:py-10 py-8 border rounded-lg ">
            <div className="flex items-center gap-4">
              <TiTags className="text-[28px]" />
              <SectionTitle title={"Tags"}></SectionTitle>
            </div>
            <AllTags setSearch={setSearch}></AllTags>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
