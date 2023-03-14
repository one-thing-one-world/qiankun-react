import React, { useState, useEffect } from "react";

function LazyImage({ src, alt }) {
  const [imageSrc, setImageSrc] = useState(null);
  const [imageRef, setImageRef] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setImageSrc(src);
          observer.disconnect();
        }
      },
      {
        rootMargin: "0px 0px 50px 0px",
      }
    );

    if (imageRef) {
      observer.observe(imageRef);
    }

    return () => {
      if (imageRef) {
        observer.unobserve(imageRef);
      }
    };
  }, [src, imageRef]);

  return <img style={{minWidth:'400px'}} ref={setImageRef} src={imageSrc} alt={alt} />;
}

export default LazyImage
