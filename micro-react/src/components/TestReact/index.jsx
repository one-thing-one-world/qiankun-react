import React, { useState, useEffect } from "react"

export default function TestReact() {
  const [testState, settestState] = useState(null)
  useEffect(() => {
    console.log(testState, "testState")
  }, [])
  return <div>TestReact</div>
}
