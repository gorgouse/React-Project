import React from 'react'

class Login extends React.Component{

    state = {username:'',password:''}

    handleSubmit = (event) =>{
        event.preventDefault()//阻止表单提交
        // console.log(this);
        const {username,password} = this.state //从ref结点中取出来
        console.log(this);
        console.log(username);
        console.log(password);
    }

    saveFormData = (dataType)=>{
        // console.log(dataType);
        return (event)=>{
            // console.log(dataType+":"+event.target.value);
            this.setState({[dataType]:event.target.value})
            // console.log(this);
            console.log(event);
        }
    }

    saveFormData1 = (dataType,event)=>{
            this.setState({[dataType]:event.target.value})
            console.log(this);
    }


    
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit} action="http://www.haipitao.top">
                    {/* 函数的柯里化 */}
                    账号：<input onChange={this.saveFormData('username')} type="text"  placeholder="请输入账号"/>
                    密码：<input onChange={this.saveFormData('password')} type="password" placeholder="请输入密码"/> 
                    {/*  简写,在调用onchange*/}
                    账号1：<input onChange={event =>{this.saveFormData1('username',event)}} type="text"  placeholder="请输入账号"/>
                    密码1：<input onChange={event =>{this.saveFormData1('password',event)}} type="password" placeholder="请输入密码"/> 
                    <button>提交</button>
                </form>
            </div>
        )
    }

}

export default Login;