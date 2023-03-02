import React, { useEffect } from "react"

export default function Page1() {
  useEffect(() => {
    console.log('page1')
  }, [])
  return <div className="page1-container">Page1</div>
}
