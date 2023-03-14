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
import TestReact from './components/TestReact'
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
  useLayoutEffect(() => {
    const callback = (entries) =>
      entries.forEach((item, index) => {
        console.log('container', item, index, entries)
        if (item.intersectionRatio > 0) {
          console.log(item, 'itemss')
          let container = item.target
          console.log(container.dataset.orderkey, 'orderkey', index, container.style.display)

          // ReactDOM.createRoot(document.getElementById('page2'))
          // let key = container.dataset.orderkey
          let Cp = observerComponets[index].Com
          ReactDOM.render(
            <Suspense fallback={<div>Loading...page1</div>}>
              <Cp></Cp>
            </Suspense>, container)

        }

      })

    const option = {
      // threshold: 0.5,

      // rootMargin: "20px",
      // threshold: 0.5,
      // rootMargin: "0px 0px 50px 0px",


    }
    const io = new IntersectionObserver(callback, option);




    setTimeout(() => {
      let lists = Array.from(document.querySelectorAll(".list-virtual"))
      lists.forEach((tab) => {
        io.observe(tab)
      })
      console.log(lists, "lists")

    }, 200)
  }, [])

  // useEffect(() => {

  //   setTimeout(() => {
  //     io.observe(document.getElementById('page1'))
  //     io.observe(document.getElementById('page2'))
  //     io.observe(document.getElementById('page3'))
  //     // var p = document.createElement("p");
  //     // var content2 = document.getElementById('page2')
  //     // const VDOM = <h1 id='title'>Hello, React</h1>
  //     //2. 渲染虚拟DOM到页面
  //     // ReactDOM.render(VDOM, document.getElementById('page2'))
  //     // content2.appendChild(p)
  //     // console.log((<div>5555666</div>).nodeType())

  //     // console.log(document.body,p)
  //     // document.body.appendChild(p);

  //   }, 100)

  //   ReactDOM.createPortal(<div>portale</div>, document.body)
  // }, []);

  useEffect(() => {
    // hocFn(observerComponets)
  }, []);

  let FnCom = HOCView(Page4)
  return <div>
    <h1>
      micro-react-home-page
    </h1>
    <div onClick={() => {
      navigate('/table')
    }}>
      goto table
    </div>

    <div id="testHoc">
      {/* <Instance></Instance> */}
    </div>
    {/* <InstanceHelloWorld testProps="testProps"></InstanceHelloWorld> */}
    {/* Instance */}

    <div>
      <LazyImage src='https://www.pythonthree.com/wp-content/uploads/2023/02/1676346033-%E5%9C%A8Mac%E4%B8%8A%E4%B8%8B%E8%BD%BD%E5%B9%B6%E5%AE%89%E8%A3%85ChatGPT.jpg'
        alt="hello img"
      ></LazyImage>
    </div>
    <div>
      {/* <Page2></Page2> */}

    </div>

    <div>
      <TestReact></TestReact>
    </div>
    <Suspense fallback={<div>Loading...page1</div>}>
      <div id='page1' data-orderkey={0} className='list-virtual'>
        {/* <Page1></Page1> */}
      </div>
      <div id='page2' data-orderkey={1} className='list-virtual'>
        {/* <Page2></Page2> */}
      </div>
      <LazyImage src='https://www.pythonthree.com/wp-content/uploads/2023/02/1676346033-%E5%9C%A8Mac%E4%B8%8A%E4%B8%8B%E8%BD%BD%E5%B9%B6%E5%AE%89%E8%A3%85ChatGPT.jpg'
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
      ></LazyImage >
      <div id='page3' data-orderkey={2} className='list-virtual'>
      </div>
    </Suspense>
    <FnCom>
      <div>
        loadingsss
      </div>
    </FnCom>

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