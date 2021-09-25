import React, { Component } from 'react'

class Item extends Component {

    state = {mouse:false}

    handleMouse = (flag)=>{
     return ()=>{
        this.setState({mouse:flag})
     }
    }

    handleCheck = (id)=>{
        return (event)=>{
            this.props.updateTodo(id,event.target.checked)
        }
    }

    handleDelete = (id)=>{
        return ()=>{
            if(window.confirm('你确定要删除吗？'))
            this.props.deleteTodo(id)
        }
    }

    render () {
        const {id,done,name} = this.props
        const {mouse} = this.state
        return (
            <div style={{border:'1px solid #ddd'}}>
                <li style={{marginTop:'10px',height: '30px',background: mouse === true? 'skyblue': 'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
                    <div>
                        <label>
                            <input type="checkbox" checked={done} onChange ={this.handleCheck(id)} />
                            <span>{name}</span>
                            <button style={{display : mouse === true ? 'block' : 'none'}} type='button' onClick={this.handleDelete(id)}>删除</button>
                        </label>
                    </div>
                </li>
            </div>
        )
    }
}

export default Item