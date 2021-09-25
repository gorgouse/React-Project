import React, { Component } from 'react'
import axios from 'axios'

export default class CarData extends Component {
    handleCar = ()=>{
        axios.get('http://localhost:3000/api2/cars').then(
            response =>{console.log('成功了',response.data);},
            error =>{console.log('失败了',error)}
        )
    }
    render() {
        return (
            <div>
                <button type='button' onClick={this.handleCar}>获取车信息</button>
            </div>
        )
    }
}
