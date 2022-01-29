import React from "react";

function PhotoDetails({ photo, toggleDetails }) {
  console.log({ photo });
  return (
    <div
      className="details-wrapper grid center"
      onClick={() => {
        toggleDetails(null);
      }}
    >
      <div className="arrow" onClick={() => toggleDetails(null)}></div>
      <img
        src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_b.jpg`}
      />
    </div>
  );
}

export default PhotoDetails;
