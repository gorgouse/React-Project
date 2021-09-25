import React, { Component } from 'react'
import './index.css'
import PubSub from 'pubsub-js'
// import {nanoid} from 'nanoid'

export default class SearchResult extends Component {
    state = {
        list:[],
        isFirst:true,//是否为第一次打开页面
        isLoading:false,
        err:'',
    }

    componentDidMount(){
        this.toekn = PubSub.subscribe('requireInput',(_,data)=>{
            // console.log('我收到数据了',data);
            this.setState(data)
        })
    }

    componentWillUnmount(){
        PubSub.unsubscribe(this.toekn)
    }

    render() {
        const {list,isFirst,isLoading,err} = this.state
        return (
            <div>
                <div className="row">
                  {
                    isFirst ? <h2>欢迎使用，输入关键字，随后点击搜素</h2>:
                    isLoading ? <h2>Loading.......</h2>:
                    err ? <h2 style={{color:'red'}}>{err}</h2>:
                    list.map((item)=>{
                        return  (
                            <div className="card" key={item.id}>
                                <a href={item.html_url} target="_blank" rel="noreferrer">
                                <img alt="head_portrait" src={item.avatar_url} style={{width: '100px'}}/>
                                </a>
                                <p className="card-text">{item.login}</p>
                            </div>

                        )
                    })
                  }

                </div>                
            </div>
        )
    }
}
