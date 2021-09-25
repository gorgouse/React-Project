import React, { Component } from 'react'
import StudentData from './StudentData'
import CarData from './CarData'

export default class GetData extends Component {
    render() {
        return (
            <div style={{display:'flex'}}>
                <StudentData></StudentData>
                <CarData></CarData>
            </div>
        )
    }
}
