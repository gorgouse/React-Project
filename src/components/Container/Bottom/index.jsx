import React, { Component } from 'react'

class Bottom extends Component {

    handleAllDone = (event)=>{
        this.props.allCheckTodo(event.target.checked)
    }

    handleClear = ()=>{
        this.props.clearAllDone()
    }

    render () {
        const {todos} = this.props
        const total = todos.length
        const doneCount = todos.reduce((pre,todo)=> pre + (todo.done === true ? 1 :0),0)
        return (
            <div style={{border:'1px solid #ddd',textAlign:'center',marginTop:'10px',height: '40px'}}>
                <div style={{marginTop: '10px'}}>
                    <input onChange={this.handleAllDone} checked={doneCount === total && total !== 0? true:false} type="checkbox"/>
                    <span> 已完成{doneCount} / 全部{total}</span>

                    <button onClick={this.handleClear} style={{marginLeft:'300px'}} type="button">清除已完成任务</button>
                </div>
            </div>
        )
    }
}

export default Bottom