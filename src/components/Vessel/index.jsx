import React, { Component } from 'react'
import SearchInput from './SearchInput'
import SearchResult from './SearchResult'

export default class Vessel extends Component {
    
    render() {
        return (
            <div>
                <div className="container">
                    <SearchInput></SearchInput>
                    <SearchResult></SearchResult>
                </div>
            </div>
        )
    }
}
