import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons"
import { Menu } from "antd"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
const items = [
  {
    label: "micro-react",
    key: "micro-react",
    path: "/gh/micro-react",

    icon: <MailOutlined />,
  },
  {
    label: "umi-react",
    key: "umi-react",
    path: "/gh/umi-react",
    icon: <AppstoreOutlined />,
  },
  {
    label: "csms",
    key: "csms",
    path: "/gh/csms",
    icon: <SettingOutlined />,
  },
  // {
  //   label: "umi-react",
  //   key: "umi-react",
  //   path: "/gh/umi-react",
  //   icon: <SettingOutlined />,
  // },
]
const Header = () => {
  const navigate = useNavigate()
  const [current, setCurrent] = useState("main-react")
  const onClick = (e) => {
    const clickedObj = items.find((el) => el.key === e.key)
    navigate(clickedObj.path)
    console.log(clickedObj, "clickedObj ", e)

    setCurrent(e.key)
  }

  
  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  )
}
export default Header
