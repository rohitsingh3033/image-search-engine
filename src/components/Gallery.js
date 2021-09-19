import React, { useEffect, useState } from "react";
import Image from "./Image";
import { getSearchedImages, getTrendingImages } from "../api/api";
import Masonry from "react-masonry-component";

const Gallery = ({ query }) => {
  const [imgList, setImgList] = useState([]);
  useEffect(() => {
    getTrendingImages().then((data) => {
      console.log(data);
      setImgList(data);
    });
  }, []);

  useEffect(() => {
    if (query.trim() === "") {
      return;
    }
    async function fetchData() {
      const response = await getSearchedImages(query);
      setImgList(response);
    }
    fetchData();
  }, [query]);

  return (
    <div>
      {imgList.length === 0 ? <h2>No images found</h2> : null}
      <Masonry className="grid-container" options={{ isFitWidth: true }}>
        {imgList.map((img) => {
          return (
            <Image
              src={img.urls.small}
              alt={img.alt_description}
              key={img.id}
            />
          );
        })}
      </Masonry>
    </div>
  );
};

export default Gallery;
