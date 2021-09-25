import React, { Component } from 'react'
import {nanoid} from 'nanoid'
import './index.css'
export default class Header extends Component {

    OnClickMethod = (event)=>{
        const {keyCode,target} = event
        if(target.value.trim() === ''){
            alert("输入不能为空")
            return
        }
        if(keyCode !== 13) return
        const obj = {id:nanoid(),name:target.value,done:false}
        this.props.addTodo(obj)
        target.value = ''
    }
    render() {
        return (
            <div className="todo-header">
                <input type="text" onKeyUp={this.OnClickMethod} placeholder="请输入你的任务名称，按回车键确认"/>
            </div>
        )
    }
}
