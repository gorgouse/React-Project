import React from 'react'

class Timer extends React.Component{
    state = {seconds : null}
    tick() {
        console.log(this.a);
        this.setState(state => ({
          seconds: new Date().getSeconds() 
        }));
      }
    //挂载
    componentDidMount(){
        // this.interval = setInterval(() => this.tick(), 1000);
    }
    //取消挂载
    // componentWillUnmount(){
    //     clearInterval(this.interval)
    // }

    render(){
        return(
            <div>
                <h3>Seconds:{this.state.seconds}</h3>
                {console.log(this.props)}
                <ul>
                    {this.props.array.map(item=>(
                        <li key={item.key}>{item.key}{item.value}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Timer;