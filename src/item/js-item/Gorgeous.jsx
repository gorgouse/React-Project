// import logo from './logo.svg';
import React from 'react';
// 1、类 2、方法
// function Gorgeous(){ 
//     return (
//         <span className="Gorgeous">
//             <h2>Gorgeouse is Coming soon !</h2>
//         </span>
//     )
// }

class Gorgeous extends React.Component{

    state = {isHot:true,wind:",微风"}

    render(){
        const curState = this.state
        return (
        <h1 onClick={this.changeWeather}>今天的天气很{curState.isHot ? '炎热' : '凉爽'}{curState.wind}</h1>
        )
    }

    changeWeather = ()=>{
        const isHot = this.state.isHot
        this.setState({isHot:!isHot})
    }
 
}

export default Gorgeous;