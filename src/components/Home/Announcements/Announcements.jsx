import { useQuery } from "@tanstack/react-query";
import Gap from "../../Common/Gap";
import AnnouncementCard from "./AnnouncementCard";
import axios from "axios";
import LoadingSpinner from "../../Common/LoadingSpinner";
import ErrorMessage from "../../Common/ErrorMessage";

const Announcements = () => {
  const {
    data: announcements = [],
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["announcements"],
    queryFn: async () => {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/announcements`);
      return data;
    },
  });

  if (isPending) return <LoadingSpinner />;
  if (isError && error) return <ErrorMessage error={error} />;

  return (
    <div>
      <Gap></Gap>
      <div className="flex flex-col gap-5 max-h-[75vh] overflow-auto">
        {announcements.map((announcement) => (
          <AnnouncementCard announcement={announcement} key={announcement._id}></AnnouncementCard>
        ))}
      </div>
    </div>
  );
};

export default Announcements;
