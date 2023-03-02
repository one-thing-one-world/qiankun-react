import { useRoutes, useNavigate } from 'react-router-dom'
import { lazy, Suspense } from "react"
import './App.css'
// import Page1 from './components/Page1'
// import Page2 from './components/Page2'

// import { useEffect } from "react"
// import Page1 from './components/Page1'
const Page1 = lazy(() => import(/* webpackChunkName: 'Page1' */  './components/Page1'))
const Page2 = lazy(() => import(/* webpackChunkName: 'Page2' */ './components/Page2'))

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
    <Suspense fallback={<div>Loading...page1</div>}>
      <Page1></Page1>
      {/* </Suspense>
    <Suspense fallback={<div>Loading...page2</div>}> */}
      <Page2></Page2>
    </Suspense>
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