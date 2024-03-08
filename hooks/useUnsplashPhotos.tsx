import { useState, useEffect } from "react";
import { createApi } from "unsplash-js";
import { UNSPLASH_ACCESS_KEY } from "../config";

const unsplash = createApi({ accessKey: UNSPLASH_ACCESS_KEY });

const useUnsplashPhoto = (query: string) => {
  const [photo, setPhoto] = useState<any>(null);

  useEffect(() => {
    const fetchPhoto = async () => {
      try {
        const response = await unsplash.search.getPhotos({ query });
        if (!response.errors && response.response.results.length > 0) {
          setPhoto(response.response.results[0]);
        }
      } catch (error) {
        console.error("Error fetching photo:", error);
      }
    };

    fetchPhoto();

    return () => {
      setPhoto(null);
    };
  }, [query]);

  return photo;
};

export default useUnsplashPhoto;
