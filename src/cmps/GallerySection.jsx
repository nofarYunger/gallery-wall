import { PhotoStrip } from "./PhotoStrip";

export function GallerySection({ photos, toggleDetails, elLastStrip }) {
  if (!photos) return;
  const photosToShow = [...photos];
  const galleryStrip = [];
  for (let i = 0; i < photos.length / 5; i++) {
    const isLast = i === photos.length / 5 - 1;
    galleryStrip.push(
      <PhotoStrip
        key={i}
        elLastStrip={elLastStrip}
        isLast={isLast}
        toggleDetails={toggleDetails}
        photos={photosToShow.splice(0, 4)}
      />
    );
  }
  return <div>{galleryStrip}</div>;
}
