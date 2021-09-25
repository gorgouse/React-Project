import React from 'react';
class TodoApp  extends React.Component{
    constructor(props){
        super(props);
        this.state = {items:[],text:''}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(e){
        this.setState({ text : e.target.value})
        console.log(this);
    }
    handleSubmit(e){
        e.preventDefault();
        if(this.state.text.length === 0){
            return;
        }
        const newItem = {
            text:this.state.text,
            id: Date.now()
        }
        this.setState(state=>({
            items:state.items.concat(newItem),
            text:''//再初始化
        }))
    }
//绑定value跟state.text是为了让state赋值完成后初始化、清空
    render(){
        return(
            <div>
                <h1>ToDo</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <h2>What needs to be done?</h2>
                        <input onChange={this.handleChange} value={this.state.text}></input>
                    </label>
                    <button>
                        Add ToDo of the list({this.state.items.length})
                    </button>

                </form>
                <TodoList items={this.state.items}></TodoList>
            </div>
        )
    }

}

class TodoList extends React.Component{
    render(){
        return(
                <ul >
                    {this.props.items.map(item=>(
                        <li key={item.id}>{item.text}</li>
                    ))}
                </ul>
        )
    }
}
  
export default TodoApp