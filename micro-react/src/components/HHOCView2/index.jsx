import React, { useState, useEffect, useRef } from "react"

const HHOCView2 = (HocComponent) => {
  const [isShow, setIsShow] = useState(false)
  const containerRef2 = useRef(null)
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach(({ intersectionRatio }) => {
          console.log(entries, "entriesdd2", intersectionRatio)
          intersectionRatio > 0 && setIsShow(true)
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
      // let lists = Array.from(document.querySelectorAll(".virtuals"))
      io.observe(containerRef2.current)
    }, 200)

    // setTimeout(() => {
    //   io.unobserve(containerRef2.current)
    //   io.disconnect()
    // }, [1000])
  }, [])
  // const comRef = useRef()
  // useEffect(() => {
  //   console.log(comRef, "comRef")
  // }, [comRef])

  useEffect(() => {
    console.log(isShow, "isShow")
  }, [isShow])
  return (props) => (
    <div ref={containerRef2} style={{ minHeight: isShow ? "unset" : "400px" }}>
      {isShow ? <HocComponent {...props}></HocComponent> : props.children}
    </div>
  )
}

export default HHOCView2
