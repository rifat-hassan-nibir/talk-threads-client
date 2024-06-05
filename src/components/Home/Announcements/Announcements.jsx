import Gap from "../../Gap";
import SectionTitle from "../../SectionTitle";
import AnnouncementCard from "./AnnouncementCard";

const Announcements = () => {
  return (
    <div className="py-4">
      <SectionTitle title={"Announcements"}></SectionTitle>
      <Gap></Gap>
      <div className="flex flex-col gap-5 max-h-[80vh] overflow-auto">
        <AnnouncementCard></AnnouncementCard>
        <AnnouncementCard></AnnouncementCard>
        <AnnouncementCard></AnnouncementCard>
        <AnnouncementCard></AnnouncementCard>
      </div>
    </div>
  );
};

export default Announcements;
