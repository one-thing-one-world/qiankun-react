// 运行时配
// import './provider/http';
// import { setCreateHistoryOptions } from '@umijs/max'

export const qiankun = {
  async bootstrap(props: any) {
    // 从这里拿父组件数据
    console.log(props,'childProps')
   
  
  },
  async mount(props: any) {
    console.log(123321, window.__POWERED_BY_QIANKUN__,props)
    // 微前端依赖
    if (window.__POWERED_BY_QIANKUN__ && props) {
      props.base = '/gh/umi-react'
      // props.base = ''

      // setCreateHistoryOptions({basename:'/gh/csms'})
     
      
    }
    props.onGlobalStateChange((state:any, prev:any) => {
      // state: 变更后的状态; prev 变更前的状态
      console.log(state, prev,'childPropmount',props);
    });
  },
}
