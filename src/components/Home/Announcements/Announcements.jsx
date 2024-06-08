import Gap from "../../Common/Gap";
import AnnouncementCard from "./AnnouncementCard";

const Announcements = () => {
  return (
    <div>
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
