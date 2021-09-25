import React, { Component } from 'react'
import axios from 'axios'

export default class StudentData extends Component {
/**
 * 同源问题，请求可以发送，但ajax引擎把响应拦截了，所以需要代理
 * 请求先找当前本地环境3000的public文件夹下文件有没有路径或文件，如果没有则请求5000
 */

    handleStudent = ()=>{
        axios.get('http://localhost:3000/api1/students').then(
            response =>{console.log('成功了',response.data);},
            error =>{console.log('失败了',error)}
        )
    }

    render() {
        return (
            <div>
                <button type='button' onClick={this.handleStudent}>获取学生信息</button>
            </div>
        )
    }
}
