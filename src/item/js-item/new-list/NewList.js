import React from 'react'
import './NewList.css'

export default class NewList extends React.Component{

    state = {newArr:[]}
    myRef = React.createRef()

    componentDidMount(){
        setInterval(() => {
            const {newArr} = this.state
            const news = "新闻"+(newArr.length+1)
            this.setState({newArr:[news,...newArr]})
        }, 1000);
    }

    getSnapshotBeforeUpdate(){
        return this.myRef.current.scrollHeight;
    }

    componentDidUpdate(preProds,preState,height){
        this.myRef.current.scrollTop += this.myRef.current.scrollHeight - height
    }

    render(){
        return(
            <div className="list" ref={this.myRef}>
                {
                    this.state.newArr.map((n,index)=>{
                    return <div key={index} className="news">{n}</div>
                    })
                }
            </div>
        )
    }
}