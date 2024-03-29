import React, { useState, useEffect, useRef } from "react"

// export default function HOCView() {
//   return (
//     <div>HOCView</div>
//   )
// }

const HOCView = (HocComponent) => {
  const [isShow, setIsShow] = useState(false)
  const containerRef = useRef(null)
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach(({ intersectionRatio }) => {
          intersectionRatio > 0 && setIsShow(true)
          console.log(entries, "entriesdd", intersectionRatio)
          // intersectionRatio > 0 && setIsShow(true)
        }),
      {}

      // ([{ intersectionRatio }]) => {
      //   console.log(intersectionRatio, "intersectionRatio")
      //   return intersectionRatio > 0 && setIsShow(true)
      // },
      // {}
    )

    setTimeout(() => {
      // let lists = Array.from(document.querySelectorAll(".virtuals"))
      // lists.forEach((tab) => {
      //   io.observe(tab)
      // })
      // let lists = Array.from(document.querySelectorAll(".virtuals"))io.unobserve(element);

      io.observe(containerRef.current)
    }, 200)

    // setTimeout(() => {
    //   io.unobserve(containerRef.current)
    //   io.disconnect()
    // }, [1000])
  }, [])
  // const comRef = useRef()
  // useEffect(() => {
  //   console.log(comRef, "comRef")
  // }, [comRef])
  return (props) => (
    <div
      className="virtuals"
      ref={containerRef}
      style={{ minHeight: isShow ? "unset" : "100px" }}
    >
      {isShow ? <HocComponent {...props}></HocComponent> : props.children}
    </div>
  )
}

export default HOCView
