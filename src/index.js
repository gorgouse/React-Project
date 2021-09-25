import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Vessel from './components/Vessel'
// import GetData from './components/GetData'
// import App from './App';
// import Container from './components/Container'
// import Gorgeous from './item/js-item/Gorgeous';
// import Timer from './item/js-item/Timer';
// import TodoApp from './item/js-item/TodoApp';
// import Login from './item/js-item/Login';
// import Life from './item/js-item/Life';
// import Count from './item/js-item/Count';
// import A from './item/js-item/A';
// import NewList from './item/js-item/new-list/NewList';
// import Person from './item/js-item/Person';


/**
 * 旧的React生命周期包含componentWillMount、componentDidMount、componentWillUpdate
 * 新的React生命周期废弃了componentWillMount、componentDidMount、componentWillUpdate，
 * 新增了getDerivedStateFromProps和getSnapShotBeforeUpdate
 */
// let array = [];
// let b = {key:'1',value:'b'}
// let c = {key:'2',value:'c'}
// array.push(b);
// array.push(c)
// console.log(array);

// ReactDOM.render(<App></App>,document.getElementById('root'))

ReactDOM.render(
<React.StrictMode>
    <Vessel></Vessel>
    {/* <GetData></GetData> */}
    {/* <Container></Container> */}
{/* <App ></App> */}

</React.StrictMode>,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// 用于记录页面性能
reportWebVitals();
