import React from "react";

export const Photo = ({ photos }) => {
  if (photos && photos[0]) {
    const photo = photos[0];
    return (
      <img
        src={"https://api.zonky.cz" + photo.url}
        alt={photo.name}
        width="150"
      />
    );
  }
  return "N/A";
};
