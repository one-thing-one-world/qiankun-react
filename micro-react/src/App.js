import { useRoutes, useNavigate } from 'react-router-dom'
// import { useEffect } from "react"

const Home = () => {
  const navigate = useNavigate()
  return <div>
    <h1>
      micro-react-home-page
    </h1>
    <div onClick={() => {
      navigate('/table')
    }}>
      goto table
    </div>
  </div>
}

const Table = () => {
  return <h1>micro-react-home-table</h1>
}

export default function App() {
  const menuList = [
    {
      path: '',
      element: <Home />,
    },
    {
      path: 'home',
      element: <Home />,
    },
    {
      path: 'table',
      element: <Table />,
    },
  ]

  return useRoutes(menuList)
}