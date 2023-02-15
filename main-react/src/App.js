import { useRoutes, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
// import { useEffect } from "react"

const Home = () => {
  return <div>
    <h1>
      micro-react-home-page
    </h1>
  </div>
}


export default function App() {
  const menuList = [
    {
      path: '',
      element: <Navigate to="gh/home" ></Navigate>
    },
    {
      path:'gh',
      element: <Layout></Layout>,
      children: [
        {
          path: 'home',
          element:<Home></Home>
        },
      ]
    },
    {
      path: '/gh/micro-react',
      element: <Layout></Layout>,
      children: [
        {
          path: '/gh/micro-react/home'
        },
        {
          path: '/gh/micro-react/access'
        },
        {
          path: '/gh/micro-react/table'
        }
      ]
    },
    {
      path: '/gh/umi-react',
      element: <Layout></Layout>,
      children: [
        {
          path: '/gh/umi-react/home'
        },
        {
          path: '/gh/umi-react/access'
        },
        // {
        //   path: '/gh/umi-react/table'
        // }
      ]
    },
    {
      path: '/gh/csms',
      element: <Layout></Layout>,
      children: [
        {
          path: '/gh/csms/home'
        },
        {
          path: '/gh/csms/access/access'
        },
        // {
        //   path: '/gh/umi-react/table'
        // }
      ]
    },

  ]
  return useRoutes(menuList)
}