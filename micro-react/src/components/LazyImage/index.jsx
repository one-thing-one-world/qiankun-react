import React, { useRef, useState, useEffect } from "react"

const LazyImage = ({ src, alt }) => {
  const [isIntersecting, setIntersecting] = useState(false)
  const imgRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersecting(true)
          observer.unobserve(imgRef.current)
        }
      },
      {
        rootMargin: "0px 0px 50px 0px",
      }
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current)
      }
    }
  }, [imgRef])

  return <img ref={imgRef} src={isIntersecting ? src : ""} alt={alt} />
}

export default LazyImage
