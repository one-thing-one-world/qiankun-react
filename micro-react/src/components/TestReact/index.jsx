import React, { useState, useEffect } from "react"
import TestReact2 from "../TestReact2"

export default function TestReact() {
  const [testState, settestState] = useState(0)

  // let testFn = (a, b, c, d) => {
  //   console.log(a, b, c, d, "helloTestFn")
  // }
  // useEffect(() => {
  //   console.log(testState, "useEffect1")
  //   testFn(1, 2, 3)
  //   return () => {
  //     console.log("useEffect1return")
  //   }
  // }, [testState])

  // useEffect(() => {
  //   console.log(testState, "useEffect2")
  //   testFn(1, 2, 3)
  //   return () => {
  //     console.log("useEffect2return")
  //   }
  // }, [])

  let list = [1, 2, 3, 4, 5]
  useEffect(() => {
    // new Promise((resolve, reject) => {
    //   console.log(1111)
    //   list.forEach((item, index) => {
    //     if (index < 1) {
    //       resolve("new1")
    //     } else {
    //       console.log(item, "else")
    //     }
    //   })
    // })
    //   .then((res) => {
    //     console.log(res, 1112)

    //     new Promise((resolve, reject) => {
    //       console.log(2221)
    //       resolve("new1")
    //     })
    //       .then((res2) => {
    //         console.log(res2, 2222)
    //         // return "new"
    //       })
    //       .then((res3) => {
    //         console.log(res3, 3333)
    //       })
    //   })
    //   .then((res1) => console.log(res1, 1113))

    const p1 = new Promise((resolve) => {
      console.log(1)
      resolve("new3")
    })
    p1.then((res3) => {
      console.log(res3, 11)
      new Promise((resolve) => {
        console.log(res3, 2)
        resolve("new4")
      }).then((res) => console.log(res, "news4"))
      // .then((res) => console.log(res, "news5"))
    })
    p1.then((res) => {
      console.log(res, 3)
    })
  }, [])
  return (
    <div>
      TestReact
      <br></br>
      <br></br>
      <br></br>
      <div onClick={() => settestState(testState + 1)}>button+{testState}</div>
      <br></br>
      <br></br>
      <br></br>
      {testState < 2 && <TestReact2 testState={testState}></TestReact2>}
      <br></br>
      <br></br>
      <br></br>
    </div>
  )
}
