import React, { useCallback, useEffect, useRef, useState } from "react";
import { MoonLoader } from "react-spinners";
import { photoService } from "../services/photoService";
import PhotoDetails from "../cmps/PhotoDetails";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GallerySection } from "../cmps/GallerySection";
gsap.registerPlugin(ScrollTrigger);

function GalleryApp() {
  const [photos, setPhotos] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [focusedPhoto, setFocusedPhoto] = useState(null);

  useEffect(() => {
    getPhotos();
  }, []);

  useEffect(() => {
    onTriggerScroll(); //adding the new sections to the gsap listner
  }, [photos]);

  const observer = useRef();
  const elLastStrip = useCallback(
    (node) => {
      if (observer.current) observer.current.disconnect(); //if we have an observer we destroy it because we dont need it anymore.
      observer.current = new IntersectionObserver(
        async (entries) => {
          //creating a new listner
          if (entries[0].isIntersecting) {
            //if the element is in the viewport:
            await setPageNum((prev) => prev + 1);
            getPhotos(pageNum);
          }
        },
        {
          rootMargin: "500px", //isIntersectin is when the element is 500px away from the viewport
        }
      );
      if (node) observer.current.observe(node);
    },
    [photos]
  );

  const getPhotos = async () => {
    setIsLoading(true);
    const { photos } = await photoService.getRecentPhotos(pageNum);
    if (photos) setPhotos((prevPhotos) => prevPhotos.concat(photos.photo));
    setIsLoading(false);
  };

  const toggleDetails = (photo) => {
    setFocusedPhoto(photo);
  };

  const onTriggerScroll = () => {
    gsap.utils.toArray("section").forEach((section, index) => {
      const w = section.querySelector(".wrapper");
      const [x, xEnd] =
        index % 2
          ? ["100%", (w.scrollWidth - section.offsetWidth) * -1]
          : [w.scrollWidth * -1, 0];
      gsap.fromTo(
        w,
        { x },
        {
          x: xEnd,
          scrollTrigger: {
            trigger: section,
            scrub: 0.3,
          },
        }
      );
    });
  };

  if (!photos?.length)
    return (
      <div className="loader-wrapper">
        <MoonLoader loading={isLoading} />
      </div>
    );

  return (
    <div className="gallery-app">
      {focusedPhoto && (
        <PhotoDetails toggleDetails={toggleDetails} photo={focusedPhoto} />
      )}
      <header className="header grid center">
          <h1 className="title">Welcome to my gallery</h1>
      </header>
      <div className="gallery">
        <GallerySection
          photos={photos}
          elLastStrip={elLastStrip}
          toggleDetails={toggleDetails}
        />
      </div>
    </div>
  );
}

export default GalleryApp;
