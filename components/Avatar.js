import React from "react";

function Avatar({ url }) {
  return (
    <img
      loading="lazy"
      className="h-10 rounded-full transition duration-150 transform hover:scale-110 cursor-pointer"
      src={url}
      alt="profile pic"
    />
  );
}

export default Avatar;
