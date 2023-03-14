import React, { useState, useEffect, useRef } from "react"

// export default function HOCView() {
//   return (
//     <div>HOCView</div>
//   )
// }

const HOCView = (HocComponent) => {
  const [isShow, setIsShow] = useState(false)
  const refsss = useRef(null)
  useEffect(() => {
    const io = new IntersectionObserver(
      // (entries) =>
      //   entries.forEach(
      //     ({ intersectionRatio }) => intersectionRatio > 0 && setIsShow(true)
      //   ),
      // {}

      ([{ intersectionRatio }]) => intersectionRatio > 0 && setIsShow(true),
      {}
    )

    setTimeout(() => {
      // let lists = Array.from(document.querySelectorAll(".virtuals"))

      // lists.forEach((tab) => {
      //   io.observe(tab)
      // })
      // let lists = Array.from(document.querySelectorAll(".virtuals"))
      io.observe(refsss.current)
    }, 200)
  }, [])

  return (props) => (
    <div
      className="virtuals"
      ref={refsss}
      style={{ minHeight: isShow ? "unset" : "400px" }}
    >
      {isShow ? <HocComponent {...props}></HocComponent> : props.children}
    </div>
  )
}

export default HOCView
