import axios from "axios";
import { useEffect, useState } from "react";

const useTags = () => {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    loadTags();
  }, []);

  const loadTags = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/tags`);
    setTags(data);
  };

  return [tags];
};

export default useTags;
