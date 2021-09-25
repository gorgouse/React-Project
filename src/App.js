import PropTypes from 'prop-types'
import './App.css';
import Header from './item/components/Header'
import List from './item/components/List'
import Footer from './item/components/Footer'

import React, { Component } from 'react'

export default class App extends Component {
  
  static propTypes = {
    todos: PropTypes.array.isRequired
  }
  state = {todos:[
    {id:'001',name:'吃饭',done:true},
    {id:'002',name:'睡觉',done:true},
    {id:'003',name:'打代码',done:false},
    {id:'004',name:'逛街',done:false},
  ]}
  // 新增todo(传给Header)
  addTodo = (todoObj)=>{
    const {todos} = this.state
    const newTodos = [todoObj,...todos]
    this.setState({todos:newTodos})
  }

  // 更新todo是否完成状态 (传给Item,经过List,但List只做展示)
  updateTodo = (id,done)=>{
    const {todos} = this.state
    const newTodo =todos.map((todoObject)=>{
      if(id === todoObject.id){
        return {...todoObject,done}
      }
      else return todoObject
    })
    this.setState({todos:newTodo})
  }

  deleteTodo = (id)=>{
    const {todos} = this.state
    const newTodos = todos.filter((todoObj)=>{
        return id !== todoObj.id
    })
    this.setState({todos:newTodos})
    
  }

  checkAllTodo = (done)=>{
    const {todos} = this.state
    const newTodos = todos.map((todo)=>{
      return {...todo,done}
    })
    this.setState({todos:newTodos})
  }

  clearAllDone =()=>{
    const {todos} = this.state
    const newTodos = todos.filter((todo)=>{
      return !todo.done
    })
    this.setState({todos:newTodos})
  }

  render() {
    const {todos} = this.state
    return (
    <div className="todo-container" style={{margin:'200px'}}>
        <div className="todo-wrap">
            <Header addTodo = {this.addTodo}></Header>
            <List todos={todos} updateTodo= {this.updateTodo} deleteTodo= {this.deleteTodo}></List>
            <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone}></Footer>
        </div>
    </div>

    )
  }
}

