import React, { useEffect } from "react"

export default function TestReact2({ testState }) {
  //   useEffect(() => {
  //     console.log("useEffect1TestReact2")

  //     return () => {
  //       console.log("useEffect1TestReact2return")
  //     }
  //   }, [testState])

  //   useEffect(() => {
  //     console.log("useEffect2TestReact2")
  //     return () => {
  //       console.log("useEffect2TestReact2return")
  //     }
  //   }, [])
  return <div>TestReact2--{testState}</div>
}
