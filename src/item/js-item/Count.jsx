import React from 'react'

class Count extends React.Component{

    constructor(props){
        super(props)
        console.log('constructor');
        this.state = {count :0}
    }
    addMethod = ()=>{
        this.setState({count:this.state.count + 1})
    }
    //控制组件的阀门（返回值：boolean）
    shouldComponentUpdate(){
        console.log('shouldComponentUpdate')
        return true;
    }
    //组件将要更新
    componentWillUpdate(){
        console.log('componentWillUpdate');
    }
    componentDidUpdate(){
        console.log('componentDidUpdate')
    }

    forceMethod = ()=>{
        this.forceUpdate();
    }

    //将要挂载
    componentWillMount(){
        console.log('componentWillMount');
    }
    //挂载完毕
    componentDidMount(){
        console.log('componentDidMount');
    }
    render(){
        console.log('render');
        return(
            <div>
                <h1>当前求和为{this.state.count}</h1>
                <button onClick={this.addMethod}>点我+1</button>
                <button onClick={this.forceMethod}>force update 强制更新</button>
            </div>
        )
    }
}

export default Count;