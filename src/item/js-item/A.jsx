import React from 'react'
import B from './B'
/**
 * 旧的React生命周期包含componentWillMount、componentDidMount、componentWillUpdate
 * 新的React生命周期废弃了componentWillMount、componentDidMount、componentWillUpdate，
 * 新增了getDerivedStateFromProps和getSnapShotBeforeUpdate
 */

class A extends React.Component{
    state = {carName:'奔驰'}
    changeCar = ()=>{
        this.setState({carName:'奥拓'})
    }
    UNSATE_componentWillMount(){}
    render(){
        return(
            <div>
                <div>我是A组件</div>
                <button onClick={this.changeCar}>换车</button>
                <B classNameReceive = {this.state.carName}></B>
            </div>
        )
    }
    componentDidMount(){}
}


export default A;