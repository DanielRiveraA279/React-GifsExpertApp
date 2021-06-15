import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  //renombrar data por images
  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <h3 animate__animated animate__fadeIn>{category}</h3>
      {loading && <p animate__animated animate__flash>Loading</p>}
      <div className="card-grid">
        {images.map((img) => {
          return <GifGridItem key={img.id} {...img} />;
        })}
      </div>
    </>
  );
};
