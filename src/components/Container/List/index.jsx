import React, { Component } from 'react'
import Item from '../Item'
class List extends Component {
    render () {
        const {todos,updateTodo,deleteTodo} = this.props
        return (
            <div>
                <ul>
                    {
                        todos.map((todo)=>{
                            return <Item updateTodo={updateTodo} deleteTodo={deleteTodo} key={todo.id} id={todo.id} done={todo.done} name={todo.name}></Item>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default List