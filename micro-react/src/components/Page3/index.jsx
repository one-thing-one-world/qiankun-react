import React, { useEffect } from "react"

export default function Page3() {
  useEffect(() => {
    console.log("page3")
  }, [])
  return <div className="page3-container page-container">Page3</div>
}
