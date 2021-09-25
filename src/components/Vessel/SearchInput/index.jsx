import React, { Component } from 'react'
// import axios from 'axios'
import PubSub from 'pubsub-js'
export default class SearchInput extends Component {
    
    search = async ()=>{
        const {keyWordElement:{value:keyWord}} = this
        PubSub.publish('requireInput',{isFirst:false,isLoading:true})
        //使用axios发送网络请求
        //#region 
        // axios.get(`/api1/search/users?q=${keyWord}`).then(
        //     response => {
        //         PubSub.publish('requireInput',{list:response.data.items,isLoading:false})
        //     },
        //     error => {
        //         PubSub.publish('requireInput',{err:error.message,isLoading:false})
        //     }
        // )
        //#endregion
        
        //使用fetch发送网络请求（关注分离的设计思想）
        //未优化
        //#region 
        // fetch(`/api1/search/users2?q=${keyWord}`).then(
        //     response => { 
        //         console.log('联系服务器成功了');
        //         return response.json();
        //     },
        //     error => {
        //         console.log('联系服务器失败了');
        //         return new Promise(()=>{})
        //     }
        // ).then(
        //     response=>{console.log('获取数据成功了',response);},
        //     error => {console.log("获取数据失败了",error)}
        //     )
        //#endregion   
        
        // 使用fetch发送网络请求(优化)
        try {
            const response = await fetch(`/api1/search/users2?q=${keyWord}`) //返回promise对象
            const data = await response.json()
            PubSub.publish('requireInput',{list:data.items,isLoading:false})
        } catch (error) {
            console.log('请求出错',error);
            PubSub.publish('requireInput',{err:error.message,isLoading:false})
        }
    }

    render() {
        return (
            <div>
                <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                    <div>
                        <input ref= { c=> this.keyWordElement = c} type="text" placeholder="enter the name you search"/>&nbsp;
                        <button onClick={this.search}>Search</button>
                    </div>
                </section>
            </div>
        )
    }
}
