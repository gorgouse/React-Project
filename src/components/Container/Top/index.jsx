import React, { Component } from 'react'
import {nanoid} from 'nanoid'

class Top extends Component {

    handleInput = (event)=>{
        if(event.keyCode !== 13) return
        const value = event.target.value
        const newTodo = {id:nanoid(),name:value,done:false}
        this.props.addTodo(newTodo)
        event.target.value = ''
    }
    
    render () {
        return (
            <div style={{border:'0px solid #ddd',height: '40px',textAlign:'center',header:'20px'}}>
               <input onKeyUp={this.handleInput} style={{width:"565px",height: '30px'}} type='text'></input>
            </div>
        )
    }
}

export default Top