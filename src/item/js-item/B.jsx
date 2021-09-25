import React from 'react'

class B extends React.Component{
    UNSATE_componentWillReceiveProps(){
        console.log('B---componentWillReceiveProps');
    }
    shouldComponentUpdate(){
        console.log('B---shouldComponentUpdate');
        return true;
    }
    UNSATE_componentWillUpdate(){
        console.log('B---componentWillUpdate');
    }

    render(){
        console.log('B---render');
        return(
        <div>我是B，我接受到的是{this.props.classNameReceive}</div>
        )
    }

    componentDidUpdate(){
        console.log('B---componentDidUpdate');
    }
}


export default B;