// import logo from './logo.svg';
// import { Layout } from 'antd';
// import "./App.css"
import Header from "./Header"
import { Outlet } from "react-router-dom"
import { registerMicroApps, start } from "qiankun"
import { useEffect } from "react"

function Layout() {
  let microList = [
    {
      name: "react",
      id: "micro-react",
    },
    {
      name: "umi",
      id: "umi-react",
    },
    {
      name: "csms",
      id: "csms",
    },
  ]

  useEffect(() => {
    registerMicroApps([
      {
        name: "micro-react", // app name registered
        entry: "//localhost:3000",
        container: "#micro-react",
        activeRule: "/gh/micro-react",
      },
      {
        name: "umi-react",
        entry: "//localhost:8000",
        container: "#umi-react",
        activeRule: "/gh/umi-react",
      },
       {
        name: "csms",
        entry: "//localhost:8001",
        container: "#csms",
        activeRule: "/gh/csms",
      },
    ])

    start()

  }, [])
  return (
    <div>
      <div>
        <Header></Header>
        <div>
          <Outlet></Outlet>
        </div>
        <div>
          {microList.map((item, index) => {
            return <div key={index} id={item.id}></div>
          })}
        </div>
      </div>
    </div>
  )
}

export default Layout
