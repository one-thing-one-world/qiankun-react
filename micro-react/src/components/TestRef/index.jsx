import React, { useEffect, useRef } from "react"

export default function TestRef() {
  const wrapperRef = useRef()
  useEffect(() => {
    console.log(TestRef, "TestRefs")
  }, [])
  return <div ref={wrapperRef}>TestRef</div>
}
