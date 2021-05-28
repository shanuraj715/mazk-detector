import React, { Component } from 'react'
import './loading.css'

export default class Loading extends Component {
    render() {
        return (
            <div className="loader-container">
                <div className="loader">
                    <div className="face face1">
                        <div className="circle"></div>
                    </div>
                    <div className="face face2">
                        <div className="circle"></div>
                    </div>
                    <span className="loading-text">Loading Models</span>
                </div>
            </div>
            
        )
    }
}
