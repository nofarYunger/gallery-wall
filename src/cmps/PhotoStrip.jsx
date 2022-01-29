export function PhotoStrip({ photos, toggleDetails, isLast, elLastStrip }) {
  if (isLast) {
    return (
      <section ref={elLastStrip}>
        <ul className="wrapper">
          {photos.map((photo, idx) => {
            return (
              <li key={idx} onClick={() => toggleDetails(photo)}>
                <img
                  src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_b.jpg`}
                />
              </li>
            );
          })}
        </ul>
      </section>
    );
  } else {
    return (
      <section>
        <ul className="wrapper">
          {photos.map((photo, idx) => {
            return (
              <li key={idx} onClick={() => toggleDetails(photo)}>
                <img
                  src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_b.jpg`}
                />
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
}
