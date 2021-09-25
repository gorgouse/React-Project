
import React from 'react'

export default class Person extends React.Component{
    state = {
        person:[
            {id:1,name:"小张",age:"18"},
            {id:2,name:"小李",age:"19"},
        ]
    }
    add = ()=>{
        const {person} = this.state
        const newPerson = {id:this.state.person.length+1,name:"小王",age:"20"}
        this.setState({person:[newPerson,...person]})
    }
    render(){
        return(
            <div>
                <h2>展示人员信息</h2>
                <button onClick={this.add}>新增小王</button>
                <h3>使用index(索引值)作为key</h3>
                <span>
                    <ul>
                        {
                            this.state.person.map((item,index)=>{
                            return <li key={index}>{item.id}---{item.name}---{item.age} <input type="text"></input></li>
                            })
                        }
                    </ul>
                </span>

                <hr></hr>
                <hr></hr>

                <h2>展示人员信息</h2>
                <button onClick={this.add}>新增小王</button>
                <h3>使用id(数据的唯一表示)作为key</h3>
                <span>
                    <ul>
                        {
                            this.state.person.map((item)=>{
                            return <li key={item.id}>{item.id}---{item.name}---{item.age}<input type="text"></input></li>
                            })
                        }
                    </ul>
                </span>
            </div>
        )
    }
}