import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
    state = {mouse:false}

    // 鼠标移动状态更新
    handleMouse = (flag)=>{
        return ()=>{
            this.setState({mouse:flag})

        }
    }

    // 更新done值
    handleCheck = (id)=>{
        return (event)=>{
            this.props.updateTodo(id,event.target.checked)
        }
    }

    // 删除
    handleDelete = (id)=>{
        return ()=>{
            if(window.confirm("确定删除吗")){
                this.props.deleteTodo(id)
            }
        }
    }

    render() {
        const {id,name,done} = this.props
        const {mouse} = this.state
        return (
            <li style={{background: mouse === true? '#ddd' : 'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
                <label>
                    <input type="checkbox" checked={done} onChange={this.handleCheck(id)}></input>
                    <span>{name}</span>
                </label>
                <button onClick={this.handleDelete(id)} className="btn btn-danger">删除</button>
                {/* <button onClick={this.handleDelete(id)} className="btn btn-danger" style={{display: mouse === true? 'block': 'none'}}>删除</button> */}
            </li>
        )
    }
}
