import React, { useEffect } from "react"

export default function Page2() {
  useEffect(() => {
    console.log("page2")
  }, [])
  return <div className="page2-container page-container">Page2</div>
}
