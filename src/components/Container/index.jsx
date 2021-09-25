import React, { Component } from 'react'
import Top from './Top'
import List from './List'
import Bottom from './Bottom'

class Container extends Component {
    state = {todos:[
        {id:'001',name:'学习',done:true},
        {id:'002',name:'玩游戏',done:false},
        {id:'003',name:'跑步',done:false},
    ]}

    addTodo = (todo)=>{
        const {todos} = this.state
        const newTodos = [todo,...todos]
        this.setState({todos:newTodos})
    }

    updateTodo = (id,done)=>{
        const {todos} = this.state
        const newTodos = todos.map((todo)=>{
            if(todo.id === id){
                return {...todo,done}
            }
            else return todo
        })
        this.setState({todos: newTodos})
    }

    deleteTodo= (id)=>{
        const {todos} = this.state
        const newTodos = todos.filter((todo)=>{
            return id !== todo.id
        })
        this.setState({todos:newTodos})
    }

    allCheckTodo = (done)=>{
        const {todos} = this.state
        const newTodos = todos.map((todo)=>{
            return {...todo,done}
        }) 
        this.setState({todos:newTodos})
    }

    clearAllDone = ()=>{
        const {todos} = this.state
        const newTodos = todos.filter((todo)=>{
            return todo.done === false
        })
        this.setState({todos:newTodos})
    }

    render () {
        const {todos} = this.state
        return (
            <div style={{margin:'100px',width:'600px',padding:'10px'}}>
                <div style={{border:'1px solid #ddd',padding:'10px'}}>
                    <Top addTodo={this.addTodo}></Top>
                    <List todos={todos} updateTodo = {this.updateTodo} deleteTodo={this.deleteTodo}></List>
                    <Bottom clearAllDone={this.clearAllDone} allCheckTodo={this.allCheckTodo} todos={todos}></Bottom>
                </div>
            </div>
        )
    }
}

export default Container