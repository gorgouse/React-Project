import React from 'react';
import ReactDOM from 'react-dom';
class Life extends React.Component{
    state = {opacity:1}

    tick = ()=>{
        this.setState({opacity:this.state.opacity-0.3})
        if(this.state.opacity<=0){
            this.setState({opacity:1})
        }
    }

    handleClick = ()=>{
        //卸载组件
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }

    componentDidMount(){
        this.internal = setInterval(() => {
            this.tick()
        }, 1000);
    }

    componentWillUnmount(){
        clearInterval(this.internal)
    }

    render(){
        return(
            <div>
                <h2 style={{opacity:this.state.opacity}}>React学不会</h2>
                <button onClick={this.handleClick}>不活了</button>
            </div>
        )
    }
}

export default Life;