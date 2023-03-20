import { useRoutes, useNavigate } from 'react-router-dom'
import { lazy, useEffect, Suspense, useLayoutEffect } from "react"
import './App.css'
import ReactDOM from "react-dom"
import React from "react"
import LazyImage from "./components/LazyImage"
import HOCView from './components/HOCView'
// import Page3 from './components/Page3'
// import Page1 from './components/Page1'
// import Page2 from './components/Page2'

// import { useEffect } from "react"
import Page4 from './components/Page1'
import Page5 from './components/Page2'

import TestReact from './components/TestReact'
import TestRef from './components/TestRef'
import HHOCView2 from './components/HHOCView2'
const Page1 = lazy(() => import(/* webpackChunkName: 'Page1' */  './components/Page1'))
const Page2 = lazy(() => import(/* webpackChunkName: 'Page2' */ './components/Page2'))
const Page3 = lazy(() => import(/* webpackChunkName: 'Page3' */ './components/Page3'))

// import Page3 from './components/Page3'


// import ReactDOM from 'react-dom'





const Apps = (props) => {
  // console.log(props, 'Appsprops')
  return <div>333444</div>
}
// let HOCFn = (Com) => (a = {}) => {
//   console.log(a, 'this is a params')
//   return <Com ></Com>
// }


let observerComponets = [
  { Com: () => <Page1></Page1> },
  { Com: () => <Page2></Page2> },
  { Com: () => <Page3></Page3> },
]

let hocFn = (Comps) => {

  const callback = (entries) =>
    entries.forEach((item, index) => {
      console.log('container', index)

      if (item.intersectionRatio > 0) {
        let container = item.target
        // document.getElementById('page2').appendChild(()=><div>appendChildcontents</div>)
        console.log(container.dataset.orderkey, 'orderkey', index)
        // ReactDOM.createRoot(document.getElementById('page2'))
        let key = container.dataset.orderkey
        let Cp = Comps[key].Com
        ReactDOM.render(
          <Suspense fallback={<div>Loading...page1</div>}>
            <Cp></Cp>
          </Suspense>, container)

      }

    })

  const option = {}
  const io = new IntersectionObserver(callback, option);

  return
  // return () => <Com {...props}></Com>
}


// hocFn(observerComponets)



const WithHelloWorld = (Component) => (params) => (props) => <Component extraProps='extraProps' {...props} />
let InstanceHelloWorld = WithHelloWorld(Apps)('tst')

const Home = () => {
  const navigate = useNavigate()



  useEffect(() => {
    // hocFn(observerComponets)
    console.log(process.env.REACT_APP_API_PATH, 'REACT_APP_API_PATH')
  }, []);

  let FnCom = HOCView(Page4)
  let HocCom = HHOCView2(Page5)

  return <div>
    {/* <h1>
      micro-react-home-page
    </h1>
    <div onClick={() => {
      navigate('/table')
    }}>
      goto table
    </div>
    <TestReact></TestReact>
    <LazyImage src='https://www.pythonthree.com/wp-content/uploads/2023/02/1676346033-%E5%9C%A8Mac%E4%B8%8A%E4%B8%8B%E8%BD%BD%E5%B9%B6%E5%AE%89%E8%A3%85ChatGPT.jpg'
      alt="hello img"
    ></LazyImage> */}

    <Suspense fallback={<div>Loading...page1</div>}>
      <Page1></Page1>
      {/* <LazyImage src='https://www.pythonthree.com/wp-content/uploads/2023/02/1676346033-%E5%9C%A8Mac%E4%B8%8A%E4%B8%8B%E8%BD%BD%E5%B9%B6%E5%AE%89%E8%A3%85ChatGPT.jpg'
        alt="hello img"
      ></LazyImage>
      <LazyImage src='https://www.pythonthree.com/wp-content/uploads/2023/02/1676346033-%E5%9C%A8Mac%E4%B8%8A%E4%B8%8B%E8%BD%BD%E5%B9%B6%E5%AE%89%E8%A3%85ChatGPT.jpg'
        alt="hello img"
      ></LazyImage>
      <LazyImage src='https://www.pythonthree.com/wp-content/uploads/2023/02/1676346033-%E5%9C%A8Mac%E4%B8%8A%E4%B8%8B%E8%BD%BD%E5%B9%B6%E5%AE%89%E8%A3%85ChatGPT.jpg'
        alt="hello img"
      ></LazyImage>
      <LazyImage src='https://www.pythonthree.com/wp-content/uploads/2023/02/1676346033-%E5%9C%A8Mac%E4%B8%8A%E4%B8%8B%E8%BD%BD%E5%B9%B6%E5%AE%89%E8%A3%85ChatGPT.jpg'
        alt="hello img"
      ></LazyImage > */}
    </Suspense>
    <div>3333</div>
    {/* <TestRef></TestRef>
    <TestRef></TestRef>

    <TestRef></TestRef>

    <TestRef></TestRef> */}
    {/* <HocCom>
      <div>
        loadingsss2
      </div>
    </HocCom>
    <FnCom>
      <div>
        loadingsss1
      </div>
    </FnCom>
    <div>2343</div> */}
    {/* <FnCom>
      <div>
        loadingsss
      </div>
    </FnCom>
    <FnCom>
      <div>
        loadingsss
      </div>
    </FnCom>
    <FnCom>
      <div>
        loadingsss
      </div>
    </FnCom>
    <FnCom>
      <div>
        loadingsss
      </div>
    </FnCom>
    <FnCom>
      <div>
        loadingsss
      </div>
    </FnCom>
    <FnCom>
      <div>
        loadingsss
      </div>
    </FnCom>
    <FnCom>
      <div>
        loadingsss
      </div>
    </FnCom>
    <FnCom>
      <div>
        loadingsss
      </div>
    </FnCom>
    <FnCom>
      <div>
        loadingsss
      </div>
    </FnCom>
    <FnCom>
      <div>
        loadingsss
      </div>
    </FnCom>
    <FnCom>
      <div>
        loadingsss
      </div>
    </FnCom>
    <FnCom>
      <div>
        loadingsss
      </div>
    </FnCom>
    <FnCom>
      <div>
        loadingsss
      </div>
    </FnCom>
    <FnCom>
      <div>
        loadingsss
      </div>
    </FnCom>
    <FnCom>
      <div>
        loadingsss
      </div>
    </FnCom> */}

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