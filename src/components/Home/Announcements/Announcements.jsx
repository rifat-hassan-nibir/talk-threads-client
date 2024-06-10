import Gap from "../../Common/Gap";
import AnnouncementCard from "./AnnouncementCard";
import LoadingSpinner from "../../Common/LoadingSpinner";
import ErrorMessage from "../../Common/ErrorMessage";
import useAnnouncements from "../../../hooks/useAnnouncements";

const Announcements = () => {
  const [announcements, isPending, isError, error] = useAnnouncements();

  if (isPending) return <LoadingSpinner />;
  if (isError && error) return <ErrorMessage error={error} />;

  return (
    <div>
      <Gap></Gap>
      <div className="flex flex-col gap-5 max-h-[70vh] overflow-auto">
        {announcements &&
          announcements.map((announcement) => <AnnouncementCard announcement={announcement} key={announcement._id}></AnnouncementCard>)}
      </div>
    </div>
  );
};

export default Announcements;
